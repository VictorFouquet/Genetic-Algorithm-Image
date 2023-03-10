import { Population } from "../../GA";
import { BinaryQuadsIndividual } from "./BinaryQuadsIndividual";
import { _ImageData } from "../../Canvas/interfaces/ImageData.interface";
/**
 * Population representing solutions to the Binary Quads Problem
 */
export declare class BinaryQuadPopulation extends Population<BinaryQuadsIndividual> {
    refImage: _ImageData;
    refImageData: number[];
    averageFitnesses: number[];
    cache: {
        [genotype: string]: number;
    };
    /**
     * Builds a new population and sets individual class static variables
     * @param individualCount number of individuals to evolve
     * @param refImage ImageData of the reference image
     * @param mutationRate population's mutation rate
     */
    constructor(individualCount: number, refImage: _ImageData, mutationRate: number);
    /**
     * Computes the number of unique individual for one generation
     */
    getDiversity(): void;
    /**
     * Computes the image generated by drawing the individual's quads on a canvas
     * @param individual individual storing the genes to get the phenotype from
     * @returns values of the pixels in the individual's generated image
     */
    getPhenotype(individual: BinaryQuadsIndividual): number[];
    /**
     * Computes fitness for each individual
     * @returns this population individuals with updated fitness
     */
    evaluate(): BinaryQuadsIndividual[];
    /**
     * Mutates individuals' genes
     * @returns this populations individual after mutation
     */
    mutate(): BinaryQuadsIndividual[];
    /** Keeps population with a constant number of individuals from generation to generation. */
    cull(): void;
}
