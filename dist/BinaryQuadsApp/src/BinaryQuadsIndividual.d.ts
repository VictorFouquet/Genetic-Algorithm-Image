import { Individual } from "../../GA";
import { CyclicQuad } from "../../Geometry";
/**
 * Individual representing a set of quads to draw on canvas
 */
export declare class BinaryQuadsIndividual extends Individual<CyclicQuad> {
    static imageWidth: number;
    static imageHeight: number;
    constructor(size: number);
    /**
     * Creates individual genes with random convex quads
     */
    random(): void;
    crossover(mate: BinaryQuadsIndividual): CyclicQuad[][];
}
