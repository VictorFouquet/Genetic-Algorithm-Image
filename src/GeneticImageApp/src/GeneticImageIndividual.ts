import { Individual } from "../../GA";


/**
 * Individual representing a set of strokes to draw on canvas
 */
export class GeneticImageIndividual extends Individual<number> {
    // Static values shared by all individuals
    static imageWidth:  number; // Width of the image
    static imageHeight: number; // Height of the image
    static maxStrokeId: number; // Max stroke id (being the strokes array's length)

    constructor(size: number) {
        super(size);
    }

    /**
     * Creates individual genes with random stroke id
     */
    random(): void {
        for (let i = 0; i < this.size; i++) {
            this.genes.push(Math.floor(Math.random() * GeneticImageIndividual.maxStrokeId))
        }
    }

    crossover(mate: GeneticImageIndividual): number[][] {
        const genes1: number[] = [];
        const genes2: number[] = [];
        // Randomly choose pivot in range [1..genesLen-2]
        const pivot: number = Math.min(
            this.size - 2,
            Math.max(Math.floor(Math.random() * this.size), 1)
        )
        // Select values from [0...pivot] in this Individual's genes to fill first part of genes1
        genes1.push(...this.genes.slice(0, pivot));
        // Select remaining values in mate genes preserving their order to fill second part of genes1
        genes1.push(...mate.genes.slice(pivot))
        // Select the genes selected in first part of genes1 preserving their order in mate genes
        // to fill first part of genes2 
        genes2.push(...mate.genes.slice(0, pivot));
        // Select values from [pivot...size] in the mate's genes to fill second part of genes2
        genes2.push(...this.genes.slice(pivot));

        return [genes1, genes2];
    }
}
