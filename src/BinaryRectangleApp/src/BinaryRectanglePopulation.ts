
import { Canvas, createCanvas } from "canvas";

import { Population } from "../../GA";
import { BinaryRectangleIndividual } from "./BinaryRectangleIndividual";
import { _ImageData } from "../../Canvas/interfaces/ImageData.interface";
import { NodeCanvasHandler } from "../../Canvas/NodeCanvasHandler";

/**
 * Population representing solutions to the Binary Rectangle Problem
 */
export class BinaryRectanglePopulation extends Population<BinaryRectangleIndividual> {
    refImage:            _ImageData; // Image Data of the reference
    refImageData:        number[];   // Image reference pixels' values  
    averageFitnesses:    number[];   // Population average fitnesses
    // Memoization cache avoiding to recompute same fitnesses several times
    cache:               { [genotype: string]: number }

    /**
     * Builds a new population and sets individual class static variables
     * @param individualCount number of individuals to evolve
     * @param refImage ImageData of the reference image
     * @param mutationRate population's mutation rate
     */
    constructor(individualCount: number, refImage: _ImageData, mutationRate: number) {
        super(individualCount, 4, mutationRate, BinaryRectangleIndividual);
        // Sets Binary Rectangle Individuals reference image width and height
        BinaryRectangleIndividual.imageWidth = refImage.width;
        BinaryRectangleIndividual.imageHeight = refImage.height;

        this.refImage            = refImage;
        this.refImageData        = Array.from(this.refImage.data);
        this.bestFitness         = Infinity;
        this.averageFitnesses    = [];
        this.cache               = {};
    }

    /**
     * Computes the image generated by drawing the individual's rectangle on a canvas
     * @param individual individual storing the genes to get the phenotype from
     * @returns values of the pixels in the individual's generated image
     */
    getPhenotype(individual: BinaryRectangleIndividual): number[] {
        // Creates canvas and canvas handler
        const canvas: Canvas = createCanvas(this.refImage.width, this.refImage.height);
        const canvasHandler: NodeCanvasHandler = new NodeCanvasHandler(canvas);
        // Colors background in white
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(0, 0, this.refImage.width, this.refImage.height);
        canvasHandler.fill('rgb(250, 250, 250)');
        // Traces and fills the individual's rectangle
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(
            individual.genes[0], individual.genes[1], individual.genes[2], individual.genes[3]
        );
        canvasHandler.fill('black');
        // Pixel array from the generated image data
        return Array.from(
            canvasHandler.getImageData(0, 0, this.refImage.width, this.refImage.height).data
        );
    }

    /**
     * Computes fitness for each individual
     * @returns this population individuals with updated fitness
     */
    evaluate(): BinaryRectangleIndividual[] {
        const ref = this.refImageData;
        // Sets average fitness to zero
        let avg: number = 0;
        
        for (let i = 0; i < this.individuals.length; i++) {
            const individual: BinaryRectangleIndividual = this.individuals[i];
            // Gets fitness from cache if an individual with same genes already existed
            if (this.cache[individual.genes.join(',')]) {
                individual.fitness = this.cache[individual.genes.join(',')];
            } else { // Computes and caches the individual's fitness
                // Gets pixels from drawing the individual's rectangle
                const pixels = this.getPhenotype(individual);
                // Counts the number of mismatching pixels
                let mismatch = 0;
                for (let j = 0; j < pixels.length; j += 4) {
                    if (
                        pixels[j]   != ref[j]   &&
                        pixels[j+1] != ref[j+1] &&
                        pixels[j+2] != ref[j+2]
                    ) mismatch++;
                }
                // Updates individual's fitness
                this.individuals[i].fitness = mismatch;
                // Updates best fitness if individual's is lower than current best fitness
                if (mismatch < this.bestFitness)
                    this.bestFitness = mismatch;
                // Caches individual's genotype fitness
                this.cache[individual.genes.join(',')] = mismatch;
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
    mutate(): BinaryRectangleIndividual[] {
        for (let i = 0; i < this.individualCount; i++) {
            // Mutates upper left corner x coordinate
            if (Math.random() < this.mutationRate)
                this.individuals[i].genes[0] = Math.round(Math.random() * BinaryRectangleIndividual.imageWidth);
            // Mutates upper left corner y coordinate
            if (Math.random() < this.mutationRate)
                this.individuals[i].genes[1] = Math.round(Math.random() * BinaryRectangleIndividual.imageHeight);
            // Mutates rectangle's width    
            if (Math.random() < this.mutationRate)
                this.individuals[i].genes[2] = Math.round(Math.random() * BinaryRectangleIndividual.imageWidth);
            // Mutates rectangle's height    
            if (Math.random() < this.mutationRate)
                this.individuals[i].genes[3] = Math.round(Math.random() * BinaryRectangleIndividual.imageHeight);
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