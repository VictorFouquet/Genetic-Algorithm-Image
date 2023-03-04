import { Canvas, createCanvas } from "canvas";
import * as fs from "fs"

import { _ImageData } from "../../Canvas/interfaces/ImageData.interface";
import { NodeCanvasHandler } from "../../Canvas/NodeCanvasHandler";
import { BinaryRectangleIndividual } from "./BinaryRectangleIndividual";
import { BinaryRectanglePopulation } from "./BinaryRectanglePopulation";
import { StatRenderer } from "./StatRenderer";


/** Binary rectangle solver main class */
export class BinaryRectangleSolver {
    populationSize:  number; // Number of individuals in population
    maxGeneration:   number; // Max number of generations before stopping evolution
    mutationRate:    number; // Population's muation rate
    refCanvasWidth:  number; // Reference image's canvas width
    refCanvasHeight: number; // Reference image's canvas height
    randRectangleX:  number; // Reference image's rectangle upper left x component
    randRectangleY:  number; // Reference image's rectangle upper left y component
    randRectangleW:  number; // Reference image's rectangle width
    randRectangleH:  number; // Reference image's rectangle height
    refCanvas:       Canvas; // Reference image's canvas
    refHandler:      NodeCanvasHandler; // Reference image's canvas handler
    outputFolder:    string; // Folder in which generated images will be written

    /**
     * Initializes population and creates reference image.
     * @param popSize population size
     * @param maxGen max number of generation to evolve
     * @param mutRate population's mutation rate
     * @param canvasWidth reference image width
     * @param canvasHeight reference image height
     * @param out output folder to write images
     */
    constructor(popSize: number, maxGen: number, mutRate: number, canvasWidth: number, canvasHeight: number, out: string) {
        this.populationSize  = popSize;
        this.maxGeneration   = maxGen;
        this.mutationRate    = mutRate;
        this.refCanvasWidth  = canvasWidth;
        this.refCanvasHeight = canvasHeight;
        this.outputFolder    = out;
        this.createRefCanvas();
    }

    /** Creates the random image of a black rectangle on white background */
    createRefCanvas(): void {
        // Create reference image's canvas
        this.refCanvas = createCanvas(this.refCanvasWidth, this.refCanvasHeight);
        this.refHandler = new NodeCanvasHandler(this.refCanvas);

        // Draws background
        this.refHandler.beginPath();
        this.refHandler.traceRectangle(0, 0, this.refCanvasWidth, this.refCanvasHeight);
        this.refHandler.fill('rgb(250, 250, 250)');

        // Creates random black rectangle
        const xValues: number[] = [
            Math.round(Math.random() * this.refCanvasWidth),
            Math.round(Math.random() * this.refCanvasWidth)
        ]
        const yValues: number[] = [
            Math.round(Math.random() * this.refCanvasHeight),
            Math.round(Math.random() * this.refCanvasHeight)
        ]
        // Picks lower x value as x origin for the rectangle
        this.randRectangleX = Math.min(...xValues);
        // Computes rectangle's width
        this.randRectangleW = Math.max(1, Math.max(...xValues) - this.randRectangleX);
        // Picks lower y value as y origin for the rectangle
        this.randRectangleY = Math.min(...yValues);
        // Computes rectangle's height
        this.randRectangleH = Math.max(1, Math.max(...yValues) - this.randRectangleY);
        // Draws the rectangle on canvas
        this.refHandler.beginPath()
        this.refHandler.traceRectangle(
            this.randRectangleX,
            this.randRectangleY,
            this.randRectangleW,
            this.randRectangleH
        );
        this.refHandler.fill('black')
        // Writes the image to file system
        const buffer: Buffer = this.refCanvas.toBuffer("image/png");
        fs.writeFileSync(`${this.outputFolder}/binRef.png`, buffer);
    }

    /**
     * Converts a number of mismatching pixels to a similarity percentage.
     * @param fitness number of mismatching pixels
     * @returns percentage of similarity between a generated image and ref image
     */
    fitnessToPercentage(fitness: number): number {
        // Number of matching pixels
        const correct = this.refCanvasWidth * this.refCanvasHeight - fitness;
        // Similarity percentage
        const percentage = ((correct * 100) / (this.refCanvasWidth * this.refCanvasHeight)).toFixed(2);
        
        return +percentage
    }

    /**
     * Creates then saves statistic graph into file system.
     * @param bestFitnesses fitnesses of the population
     * @param population population that evolved
     * @param elapsedTime total elapsed time between spawning and problem solving
     * @param refSize reference image's size
     */
    saveStats(bestFitnesses: number[], population: BinaryRectanglePopulation, elapsedTime: number, refSize: number): void {
        // Converts fitnesses to percentage
        const bestFitPercentage = bestFitnesses.map(f => this.fitnessToPercentage(f))
        const avgFitPercentage = population.averageFitnesses.map(f => this.fitnessToPercentage(f))
        // Renders statistics graph
        StatRenderer.render(
            bestFitPercentage,
            avgFitPercentage,
            population.diversity,
            population.individualCount,
            refSize,
            `${this.outputFolder}/testchart.png`,
            population.mutationRate,
            elapsedTime
        )
    }

    /**
     * Writes the image generated by the best individual phenotype
     * @param best best individual
     * @param gen current generation
     */
    saveBest(best: BinaryRectangleIndividual, gen: number) {
        // Creates canvas and canvas handler
        const canvas: Canvas = createCanvas(this.refCanvasWidth, this.refCanvasHeight);
        const canvasHandler: NodeCanvasHandler = new NodeCanvasHandler(canvas);
        // Draws best individual's rectangle
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(0,0, canvas.width, canvas.height);
        canvasHandler.fill('rgb(250, 250, 250)');
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(best.genes[0], best.genes[1], best.genes[2], best.genes[3]);
        canvasHandler.fill('hsla(0, 100%, 50%, 0.5)');
        // Draws reference rectangle for comparison purpose
        canvasHandler.beginPath();
        canvasHandler.traceRectangle(
            this.randRectangleX,
            this.randRectangleY,
            this.randRectangleW,
            this.randRectangleH
        );
        canvasHandler.fill('hsla(180, 100%, 50%, 0.5)');
        // Writes the image to file system
        const buffer: Buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(`${this.outputFolder}/${gen}.png`, buffer);
    }

    /** Binary rectangle solver main function */
    solve(): void {
        // Creates a new population
        const population: BinaryRectanglePopulation = new BinaryRectanglePopulation(
            this.populationSize,
            this.refHandler.getImageData(0, 0, this.refCanvasWidth, this.refCanvasHeight),
            this.mutationRate
        );
        // Creates an empty array to store best individuals' fitnesses
        const bestFitnesses: number[] = [];
        // Starts chrono
        const start: number = Date.now();
        // Spawns first generation
        population.spawn()
        for (let i = 0; i <= this.maxGeneration; i++) {
            console.log('Generation', i);
            // Evolves population and stores current generation's best fitness
            population.generate();
            bestFitnesses.push(+population.bestFitness);
            // Retrieves current generation's best individual
            let best: BinaryRectangleIndividual = population.solution !== undefined ?
                population.solution :
                [
                    ...population.individuals
                ].sort(
                    (a, b) => a.fitness - b.fitness
                )[0];

            // Writes best individual's image to file system
            this.saveBest(best, i);
            // Stops evolution if a solution has been found
            if (population.solution) break;
        }
        // Writes evolution's statistics to file system
        this.saveStats(
            bestFitnesses, population, +((Date.now() - start) * 0.001).toFixed(2), this.refCanvas.width
        );
    }
}
