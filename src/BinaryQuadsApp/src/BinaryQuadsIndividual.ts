import { Individual } from "../../GA";
import { Circle, CyclicQuad, Point } from "../../Geometry";

/**
 * Individual representing a set of quads to draw on canvas
 */
export class BinaryQuadsIndividual extends Individual<CyclicQuad> {
    static imageWidth:  number;
    static imageHeight: number;

    constructor(size: number) {
        super(size);
    }

    /**
     * Creates individual genes with random convex quads
     */
    random(): void {
        for (let i = 0; i < this.size; i++) {
            // Generates random circle in which the quad is inscribed
            const circle: Circle = new Circle(
                // Origin is randomly sampled in canvas limit
                new Point(
                    Math.random() * BinaryQuadsIndividual.imageWidth,
                    Math.random() * BinaryQuadsIndividual.imageHeight,
                ),
                // Radius is randomly sampled between 1 and canvas' half diagonal length
                Math.random() * Math.hypot(
                    BinaryQuadsIndividual.imageWidth,
                    BinaryQuadsIndividual.imageHeight
                ) * 0.1
            )
            const gene: CyclicQuad = new CyclicQuad(circle);
            this.genes.push(gene);
        }
    }

    crossover(mate: BinaryQuadsIndividual): CyclicQuad[][] {
        const genes1: CyclicQuad[] = [];
        const genes2: CyclicQuad[] = [];

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
