
import { Canvas, Image } from "canvas";

import { Population } from "../../GA";
import { GeneticImageIndividual } from "./GeneticImageIndividual";
import { _ImageData } from "../../Canvas/interfaces/ImageData.interface";
import { NodeCanvasHandler } from "../../Canvas/NodeCanvasHandler";


/**
 * Population representing solutions to the Genetic Image Problem
 */
export class GeneticImagePopulation extends Population<GeneticImageIndividual> {
    refImage:               _ImageData;       // Image Data of the reference
    refImageData:           number[];         // Image reference pixels' values
    background:             Image;            // Background image to draw the strokes on
    strokes:                Image[];          // Available random strokes
    averageFitnesses:       number[];         // Population average fitnesses
    phenotypeCanvasHandler: NodeCanvasHandler // Canvas handler to express genotype as phenotype
    // Memoization cache avoiding to recompute same fitnesses several times
    cache:               { [genotype: string]: number }

    /**
     * Builds a new population and sets individual class static variables
     * @param individualCount number of individuals to evolve
     * @param refImage ImageData of the reference image
     * @param mutationRate population's mutation rate
     */
    constructor(individualCount: number, refImage: _ImageData, mutationRate: number,
        background: Image, strokes: Image[], indivSize: number
    ) {
        super(individualCount, indivSize, mutationRate, GeneticImageIndividual);
        // Sets Genetic Image Individuals reference image width and height
        GeneticImageIndividual.imageWidth  = refImage.width;
        GeneticImageIndividual.imageHeight = refImage.height;
        GeneticImageIndividual.maxStrokeId = strokes.length;

        this.background          = background;
        this.refImage            = refImage;
        this.refImageData        = Array.from(this.refImage.data);
        this.bestFitness         = Infinity;
        this.averageFitnesses    = [];
        this.cache               = {};
        const phenotypeCanvas: Canvas = new Canvas(refImage.width, refImage.height);
        this.phenotypeCanvasHandler = new NodeCanvasHandler(phenotypeCanvas);
        this.strokes = strokes;
    }

    /**
     * Computes the number of unique individual for one generation
     */
    getDiversity() {
        const diversity = {};
        // Initializes current diversity to zero
        this.diversity[this.generation] = 0;
        // Increments diversity for every individual whose genotype doesnt appear
        // in this generation diversity object
        for (let i = 0; i < this.individuals.length; i++) {
            const individual: GeneticImageIndividual = this.individuals[i];
            // Gets individual's id using its points coordinates
            const individualId = individual.genes.join(',')
            if (!diversity[individualId]) {
                diversity[individualId] = 1;
                this.diversity[this.generation] ++;
            }
        }
    }

    /**
     * Computes the image generated by drawing the individual's stroke quads on a canvas
     * @param individual individual storing the genes to get the phenotype from
     * @returns values of the pixels in the individual's generated image
     */
    getPhenotype(individual: GeneticImageIndividual): number[] {
        this.phenotypeCanvasHandler.clear("white");
        this.phenotypeCanvasHandler.context.drawImage(this.background, 0, 0)
        // Traces and fills the individual's quads as strokes
        for (let i = 0; i < individual.size; i++) {
            let stroke = this.strokes[individual.genes[i]];
            this.phenotypeCanvasHandler.context.drawImage(stroke, 0, 0);
        }
        // Pixel array from the generated image data
        return Array.from(
            this.phenotypeCanvasHandler.getImageData(0, 0, this.refImage.width, this.refImage.height).data
        );
    }

    /**
     * Computes fitness for each individual
     * @returns this population individuals with updated fitness
     */
    evaluate(): GeneticImageIndividual[] {
        const ref = this.refImageData;
        // Sets average fitness to zero
        let avg: number = 0;
        
        for (let i = 0; i < this.individuals.length; i++) {
            const individual: GeneticImageIndividual = this.individuals[i];
            // Gets fitness from cache if an individual with same genes already existed
            const individualId = individual.genes.join(',')
            if (this.cache[individualId]) {
                individual.fitness = this.cache[individualId];
            } else { // Computes and caches the individual's fitness
                // Gets pixels from drawing the individual's rectangle
                const pixels = this.getPhenotype(individual);
                // Computes the distance for each channel of each pixel
                let mismatch = 0;
                for (let j = 0; j < pixels.length; j += 4) {
                    mismatch += (
                        Math.pow(pixels[j] - ref[j], 2) +
                        Math.pow(pixels[j+1] - ref[j+1], 2) +
                        Math.pow(pixels[j + 2] - ref[j + 2], 2)
                    )
                }
                
                // Updates individual's fitness
                this.individuals[i].fitness = mismatch;
                // Updates best fitness if individual's is lower than current best fitness
                if (mismatch < this.bestFitness)
                    this.bestFitness = mismatch;
                // Caches individual's genotype fitness
                this.cache[individualId] = mismatch;
            }
            // Adds individual's fitness to average fitness
            avg += this.individuals[i].fitness;
            // If fitness is zero, it means no difference could be found with the ref image
            if (this.individuals[i].fitness === 0) {
                this.solution = this.individuals[i];
                return this.individuals;
            }
        }
        // Compute average fitness
        this.averageFitness = avg / this.individuals.length;
        return this.individuals;
    }

    /**
     * Mutates individuals' genes
     * @returns this populations individual after mutation
     */
    mutate(): GeneticImageIndividual[] {
        for (let i = 0; i < this.individualCount; i++) {
            const j = Math.floor(Math.random() * this.individualSize)
            const r = Math.random();
            // Changes the stroke id for a given gene
            if (r < this.mutationRate) {
                this.individuals[i].genes[j] = Math.floor(Math.random() * this.strokes.length);
            }
        }
        return this.individuals;
    }

    /** Keeps population with a constant number of individuals from generation to generation. */
    cull(): void {
        // Sorts individual by ascending fitness as we try to minimize the mismatching pixels
        this.individuals = this.individuals.sort((a,b) => a.fitness - b.fitness);
        // Keeps best individuals
        this.individuals = this.individuals.splice(0, this.individualCount);
    }
}