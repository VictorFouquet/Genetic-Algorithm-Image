"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryRectangleSolver = void 0;
const canvas_1 = require("canvas");
const fs = require("fs");
const NodeCanvasHandler_1 = require("../../Canvas/NodeCanvasHandler");
const BinaryRectanglePopulation_1 = require("./BinaryRectanglePopulation");
const StatRenderer_1 = require("./StatRenderer");
/** Binary rectangle solver main class */
class BinaryRectangleSolver {
    /**
     * Initializes population and creates reference image.
     * @param popSize population size
     * @param maxGen max number of generation to evolve
     * @param mutRate population's mutation rate
     * @param canvasWidth reference image width
     * @param canvasHeight reference image height
     * @param out output folder to write images
     */
    constructor(popSize, maxGen, mutRate, canvasWidth, canvasHeight, out) {
        this.populationSize = popSize;
        this.maxGeneration = maxGen;
        this.mutationRate = mutRate;
        this.refCanvasWidth = canvasWidth;
        this.refCanvasHeight = canvasHeight;
        this.outputFolder = out;
        this.createRefCanvas();
    }
    /** Creates the random image of a black rectangle on white background */
    createRefCanvas() {
        // Create reference image's canvas
        this.refCanvas = (0, canvas_1.createCanvas)(this.refCanvasWidth, this.refCanvasHeight);
        this.refHandler = new NodeCanvasHandler_1.NodeCanvasHandler(this.refCanvas);
        // Draws background
        this.refHandler.beginPath();
        this.refHandler.traceRectangle(0, 0, this.refCanvasWidth, this.refCanvasHeight);
        this.refHandler.fill('white');
        // Creates random black rectangle
        const xValues = [
            Math.round(Math.random() * this.refCanvasWidth),
            Math.round(Math.random() * this.refCanvasWidth)
        ];
        const yValues = [
            Math.round(Math.random() * this.refCanvasHeight),
            Math.round(Math.random() * this.refCanvasHeight)
        ];
        // Picks lower x value as x origin for the rectangle
        this.randRectangleX = Math.min(...xValues);
        // Computes rectangle's width
        this.randRectangleW = Math.max(1, Math.max(...xValues) - this.randRectangleX);
        // Picks lower y value as y origin for the rectangle
        this.randRectangleY = Math.min(...yValues);
        // Computes rectangle's height
        this.randRectangleH = Math.max(1, Math.max(...yValues) - this.randRectangleY);
        // Draws the rectangle on canvas
        this.refHandler.beginPath();
        this.refHandler.traceRectangle(this.randRectangleX, this.randRectangleY, this.randRectangleW, this.randRectangleH);
        this.refHandler.fill('black');
        // Writes the image to file system
        const buffer = this.refCanvas.toBuffer("image/png");
        fs.writeFileSync(`${this.outputFolder}/binRef.png`, buffer);
    }
    /**
     * Converts a number of mismatching pixels to a similarity percentage.
     * @param fitness number of mismatching pixels
     * @returns percentage of similarity between a generated image and ref image
     */
    fitnessToPercentage(fitness) {
        // Number of matching pixels
        const correct = this.refCanvasWidth * this.refCanvasHeight - fitness;
        // Similarity percentage
        const percentage = ((correct * 100) / (this.refCanvasWidth * this.refCanvasHeight)).toFixed(2);
        return +percentage;
    }
    /**
     * Creates then saves statistic graph into file system.
     * @param bestFitnesses fitnesses of the population
     * @param population population that evolved
     * @param elapsedTime total elapsed time between spawning and problem solving
     * @param refSize reference image's size
     */
    saveStats(bestFitnesses, population, elapsedTime, refSize) {
        // Converts fitnesses to percentage
        const bestFitPercentage = bestFitnesses.map(f => this.fitnessToPercentage(f));
        const avgFitPercentage = population.averageFitnesses.map(f => this.fitnessToPercentage(f));
        // Renders statistics graph
        StatRenderer_1.StatRenderer.render(bestFitPercentage, avgFitPercentage, population.diversity, population.individualCount, refSize, `${this.outputFolder}/testchart.png`, population.mutationRate, elapsedTime);
    }
    /**
     * Writes the image generated by the best individual phenotype
     * @param best best individual
     * @param gen current generation
     */
    saveBest(best, gen) {
        // Creates canvas and canvas handler
        const canvas = (0, canvas_1.createCanvas)(this.refCanvasWidth, this.refCanvasHeight);
        const canvasHandler = new NodeCanvasHandler_1.NodeCanvasHandler(canvas);
        // Draws best individual's rectangle
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(0, 0, canvas.width, canvas.height);
        canvasHandler.fill('white');
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(best.genes[0], best.genes[1], best.genes[2], best.genes[3]);
        canvasHandler.fill('hsla(0, 100%, 50%, 0.5)');
        // Draws reference rectangle for comparison purpose
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(this.randRectangleX, this.randRectangleY, this.randRectangleW, this.randRectangleH);
        canvasHandler.fill('hsla(180, 100%, 50%, 0.5)');
        // Writes the image to file system
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(`${this.outputFolder}/${gen}.png`, buffer);
    }
    /** Binary rectangle solver main function */
    solve() {
        // Creates a new population
        const population = new BinaryRectanglePopulation_1.BinaryRectanglePopulation(this.populationSize, this.refHandler.getImageData(0, 0, this.refCanvasWidth, this.refCanvasHeight), this.mutationRate);
        // Creates an empty array to store best individuals' fitnesses
        const bestFitnesses = [];
        // Starts chrono
        const start = Date.now();
        // Spawns first generation
        population.spawn();
        for (let i = 0; i <= this.maxGeneration; i++) {
            console.log('Generation', i);
            // Evolves population and stores current generation's best fitness
            population.generate();
            bestFitnesses.push(+population.bestFitness);
            // Retrieves current generation's best individual
            let best = population.solution !== undefined ?
                population.solution :
                [
                    ...population.individuals
                ].sort((a, b) => a.fitness - b.fitness)[0];
            // Writes best individual's image to file system
            this.saveBest(best, i);
            // Stops evolution if a solution has been found
            if (population.solution)
                break;
        }
        // Writes evolution's statistics to file system
        this.saveStats(bestFitnesses, population, +((Date.now() - start) * 0.001).toFixed(2), this.refCanvas.width);
    }
}
exports.BinaryRectangleSolver = BinaryRectangleSolver;
