import { Individual } from "../../GA";
/**
 * Individual representing a black rectangle position and size
 */
export declare class BinaryRectangleIndividual extends Individual<number> {
    static imageWidth: number;
    static imageHeight: number;
    constructor(size: number);
    /**
     * Creates individual genes with a random upper left corner position and random size
     */
    random(): void;
    crossover(mate: BinaryRectangleIndividual): number[][];
}
