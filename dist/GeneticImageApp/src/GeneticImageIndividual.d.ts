import { Individual } from "../../GA";
/**
 * Individual representing a set of strokes to draw on canvas
 */
export declare class GeneticImageIndividual extends Individual<number> {
    static imageWidth: number;
    static imageHeight: number;
    static maxStrokeId: number;
    constructor(size: number);
    /**
     * Creates individual genes with random stroke id
     */
    random(): void;
    crossover(mate: GeneticImageIndividual): number[][];
}
