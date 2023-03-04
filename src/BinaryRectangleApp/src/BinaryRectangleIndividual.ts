import { Individual } from "../../GA";

/**
 * Individual representing a black rectangle position and size
 */
export class BinaryRectangleIndividual extends Individual<number> {
    static imageWidth:  number;
    static imageHeight: number;

    constructor(size: number) {
        super(size);
    }

    /**
     * Creates individual genes with a random upper left corner position and random size
     */
    random(): void {
        // Gets random x and y values
        const xValues: number[] = [
            Math.round(Math.random() * BinaryRectangleIndividual.imageWidth),
            Math.round(Math.random() * BinaryRectangleIndividual.imageWidth)
        ]
        
        const yValues: number[] = [
            Math.round(Math.random() * BinaryRectangleIndividual.imageHeight),
            Math.round(Math.random() * BinaryRectangleIndividual.imageHeight)
        ]
        
        // Keeps the left most point as upper left corner x component
        const randX: number = Math.min(...xValues);
        const width: number = Math.max(1, Math.max(...xValues) - randX);
        // Keeps the up most point as upper left corner y component
        const randY: number = Math.min(...yValues);
        const height: number = Math.max(1, Math.max(...yValues) - randY);

        this.genes = [randX, randY, width, height];
    }

    crossover(mate: BinaryRectangleIndividual): number[][] {
        const genes1: number[] = [];
        const genes2: number[] = [];

        // Randomly choose pivot in range [1..nCities-2]
        const pivot: number = Math.min(
            this.size - 2,
            Math.max(Math.floor(Math.random() * this.size), 1)
        )
        // Select values from [0...pivot] in this Individual's genes
        // to fill first part of genes1
        genes1.push(...this.genes.slice(0, pivot));
        // Select remaining values in mate genes preserving their order
        // to fill second part of genes1
        genes1.push(...mate.genes.slice(pivot))
        // Select the genes selected in first part of genes1 preserving their order in mate genes
        // to fill first part of genes2 
        genes2.push(...mate.genes.slice(0, pivot));
        // Select values from [pivot...size] in the mate's genes
        // to fill second part of genes2
        genes2.push(...this.genes.slice(pivot));

        return [genes1, genes2];
    }
}