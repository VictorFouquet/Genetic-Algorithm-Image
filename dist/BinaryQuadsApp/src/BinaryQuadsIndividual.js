"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryQuadsIndividual = void 0;
const GA_1 = require("../../GA");
const Geometry_1 = require("../../Geometry");
/**
 * Individual representing a set of quads to draw on canvas
 */
class BinaryQuadsIndividual extends GA_1.Individual {
    constructor(size) {
        super(size);
    }
    /**
     * Creates individual genes with random convex quads
     */
    random() {
        for (let i = 0; i < this.size; i++) {
            // Generates random circle in which the quad is inscribed
            const circle = new Geometry_1.Circle(
            // Origin is randomly sampled in canvas limit
            new Geometry_1.Point(Math.random() * BinaryQuadsIndividual.imageWidth, Math.random() * BinaryQuadsIndividual.imageHeight), 
            // Radius is randomly sampled between 1 and canvas' half diagonal length
            Math.random() * Math.hypot(BinaryQuadsIndividual.imageWidth, BinaryQuadsIndividual.imageHeight) * 0.1);
            const gene = new Geometry_1.CyclicQuad(circle);
            this.genes.push(gene);
        }
    }
    crossover(mate) {
        const genes1 = [];
        const genes2 = [];
        // Randomly choose pivot in range [1..nCities-2]
        const pivot = Math.min(this.size - 2, Math.max(Math.floor(Math.random() * this.size), 1));
        // Select values from [0...pivot] in this Individual's genes
        // to fill first part of genes1
        genes1.push(...this.genes.slice(0, pivot));
        // Select remaining values in mate genes preserving their order
        // to fill second part of genes1
        genes1.push(...mate.genes.slice(pivot));
        // Select the genes selected in first part of genes1 preserving their order in mate genes
        // to fill first part of genes2 
        genes2.push(...mate.genes.slice(0, pivot));
        // Select values from [pivot...size] in the mate's genes
        // to fill second part of genes2
        genes2.push(...this.genes.slice(pivot));
        return [genes1, genes2];
    }
}
exports.BinaryQuadsIndividual = BinaryQuadsIndividual;
