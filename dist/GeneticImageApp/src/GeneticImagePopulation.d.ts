import { Image } from "canvas";
import { Population } from "../../GA";
import { GeneticImageIndividual } from "./GeneticImageIndividual";
import { _ImageData } from "../../Canvas/interfaces/ImageData.interface";
import { NodeCanvasHandler } from "../../Canvas/NodeCanvasHandler";
/**
 * Population representing solutions to the Genetic Image Problem
 */
export declare class GeneticImagePopulation extends Population<GeneticImageIndividual> {
    refImage: _ImageData;
    refImageData: number[];
    background: Image;
    strokes: Image[];
    averageFitnesses: number[];
    phenotypeCanvasHandler: NodeCanvasHandler;
    cache: {
        [genotype: string]: number;
    };
    /**
     * Builds a new population and sets individual class static variables
     * @param individualCount number of individuals to evolve
     * @param refImage ImageData of the reference image
     * @param mutationRate population's mutation rate
     */
    constructor(individualCount: number, refImage: _ImageData, mutationRate: number, background: Image, strokes: Image[], indivSize: number);
    /**
     * Computes the number of unique individual for one generation
     */
    getDiversity(): void;
    /**
     * Computes the image generated by drawing the individual's stroke quads on a canvas
     * @param individual individual storing the genes to get the phenotype from
     * @returns values of the pixels in the individual's generated image
     */
    getPhenotype(individual: GeneticImageIndividual): number[];
    /**
     * Computes fitness for each individual
     * @returns this population individuals with updated fitness
     */
    evaluate(): GeneticImageIndividual[];
    /**
     * Mutates individuals' genes
     * @returns this populations individual after mutation
     */
    mutate(): GeneticImageIndividual[];
    /** Keeps population with a constant number of individuals from generation to generation. */
    cull(): void;
}
