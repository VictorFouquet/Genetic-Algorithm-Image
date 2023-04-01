"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryQuadPopulation = void 0;
const canvas_1 = require("canvas");
const GA_1 = require("../../GA");
const BinaryQuadsIndividual_1 = require("./BinaryQuadsIndividual");
const NodeCanvasHandler_1 = require("../../Canvas/NodeCanvasHandler");
const Geometry_1 = require("../../Geometry");
/**
 * Population representing solutions to the Binary Quads Problem
 */
class BinaryQuadPopulation extends GA_1.Population {
    /**
     * Builds a new population and sets individual class static variables
     * @param individualCount number of individuals to evolve
     * @param refImage ImageData of the reference image
     * @param mutationRate population's mutation rate
     */
    constructor(individualCount, refImage, mutationRate) {
        super(individualCount, 100, mutationRate, BinaryQuadsIndividual_1.BinaryQuadsIndividual);
        // Sets Binary Quads Individuals reference image width and height
        BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageWidth = refImage.width;
        BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageHeight = refImage.height;
        this.refImage = refImage;
        this.refImageData = Array.from(this.refImage.data);
        this.bestFitness = Infinity;
        this.averageFitnesses = [];
        this.cache = {};
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
            const individual = this.individuals[i];
            // Gets individual's id using its points coordinates
            const individualId = individual.genes.map(g => g.points.map(p => [p.x, p.y].join(',')).join(',')).sort().join(',');
            if (!diversity[individualId]) {
                diversity[individualId] = 1;
                this.diversity[this.generation]++;
            }
        }
    }
    /**
     * Computes the image generated by drawing the individual's quads on a canvas
     * @param individual individual storing the genes to get the phenotype from
     * @returns values of the pixels in the individual's generated image
     */
    getPhenotype(individual) {
        // Creates canvas and canvas handler
        const canvas = (0, canvas_1.createCanvas)(this.refImage.width, this.refImage.height);
        const canvasHandler = new NodeCanvasHandler_1.NodeCanvasHandler(canvas);
        // Colors background in white
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(0, 0, this.refImage.width, this.refImage.height);
        canvasHandler.fill('rgb(250, 250, 250)');
        // Traces and fills the individual's quads
        for (let i = 0; i < individual.size; i++) {
            const quad = individual.genes[i];
            const points = quad.points.map(p => [p.x, p.y]);
            canvasHandler.beginPath();
            canvasHandler.tracePath(points, true);
            canvasHandler.fill('black');
        }
        // Pixel array from the generated image data
        return Array.from(canvasHandler.getImageData(0, 0, this.refImage.width, this.refImage.height).data);
    }
    /**
     * Computes fitness for each individual
     * @returns this population individuals with updated fitness
     */
    evaluate() {
        const ref = this.refImageData;
        // Sets average fitness to zero
        let avg = 0;
        for (let i = 0; i < this.individuals.length; i++) {
            const individual = this.individuals[i];
            // Gets fitness from cache if an individual with same genes already existed
            const individualId = individual.genes.map(g => g.points.map(p => [p.x, p.y].join(',')).sort().join(',')).join(',');
            if (this.cache[individualId]) {
                individual.fitness = this.cache[individualId];
            }
            else { // Computes and caches the individual's fitness
                // Gets pixels from drawing the individual's rectangle
                const pixels = this.getPhenotype(individual);
                // Counts the number of mismatching pixels
                let mismatch = 0;
                for (let j = 0; j < pixels.length; j += 4) {
                    if (pixels[j] != ref[j] &&
                        pixels[j + 1] != ref[j + 1] &&
                        pixels[j + 2] != ref[j + 2])
                        mismatch++;
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
    mutate() {
        for (let i = 0; i < this.individualCount; i++) {
            const j = Math.floor(Math.random() * this.individualSize);
            const r = Math.random();
            if (r < this.mutationRate) {
                const circle = new Geometry_1.Circle(
                // Origin is randomly sampled in canvas limit
                new Geometry_1.Point(Math.random() * BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageWidth, Math.random() * BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageHeight), 
                // Radius is randomly sampled between 1 and canvas' 10 percent diagonal length
                Math.random() * Math.hypot(BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageWidth, BinaryQuadsIndividual_1.BinaryQuadsIndividual.imageHeight) * 0.1);
                const quad = new Geometry_1.CyclicQuad(circle);
                this.individuals[i].genes[j] = quad;
            }
        }
        return this.individuals;
    }
    /** Keeps population with a constant number of individuals from generation to generation. */
    cull() {
        // Sorts individual by ascending fitness as we try to minimize the mismatching pixels
        this.individuals = this.individuals.sort((a, b) => a.fitness - b.fitness);
        // Keeps best individuals
        this.individuals = this.individuals.splice(0, this.individualCount);
    }
}
exports.BinaryQuadPopulation = BinaryQuadPopulation;