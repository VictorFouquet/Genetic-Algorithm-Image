import { Canvas, Image } from "canvas";
import { NodeCanvasHandler } from "../../Canvas/NodeCanvasHandler";
import { GeneticImageIndividual } from "./GeneticImageIndividual";
import { GeneticImagePopulation } from "./GeneticImagePopulation";
/** Binary quad solver main class */
export declare class GeneticImageSolver {
    populationSize: number;
    individualSize: number;
    maxGeneration: number;
    mutationRate: number;
    steps: number;
    refCanvasWidth: number;
    refCanvasHeight: number;
    refCanvas: Canvas;
    outputFolder: string;
    background: Image;
    strokes: Image[];
    refHandler: NodeCanvasHandler;
    /**
     * Initializes population and creates reference image.
     * @param popSize population size
     * @param maxGen max number of generation to evolve
     * @param mutRate population's mutation rate
     * @param canvasWidth reference image width
     * @param canvasHeight reference image height
     * @param out output folder to write images
     */
    constructor(popSize: number, indivSize: number, maxGen: number, mutRate: number, steps: number, out: string);
    /** Creates the canvas background image */
    createBackgroundCanvas(): Promise<void>;
    /**
     * Writes the image generated by the best individual phenotype
     * @param best best individual
     * @param gen current generation
     */
    saveBest(best: GeneticImageIndividual, gen: number): void;
    /**
     * Creates random stroke that will be available to generate the image
     * @param sizeCoef scalar to set the strokes size
     */
    createStrokeImages(sizeCoef: number): Promise<void>;
    /**
     * Evolves a population for as many generations as needed to complete one step
     * @param population population to evolve
     */
    evolveStepGenerations(population: GeneticImagePopulation): void;
    /** Binary quads solver main function */
    solve(): void;
}
