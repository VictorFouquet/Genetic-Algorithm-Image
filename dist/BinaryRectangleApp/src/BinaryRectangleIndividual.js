"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryRectangleIndividual = void 0;
const GA_1 = require("../../GA");
/**
 * Individual representing a black rectangle position and size
 */
class BinaryRectangleIndividual extends GA_1.Individual {
    constructor(size) {
        super(size);
    }
    /**
     * Creates individual genes with a random upper left corner position and random size
     */
    random() {
        // Gets random x and y values
        const xValues = [
            Math.round(Math.random() * BinaryRectangleIndividual.imageWidth),
            Math.round(Math.random() * BinaryRectangleIndividual.imageWidth)
        ];
        const yValues = [
            Math.round(Math.random() * BinaryRectangleIndividual.imageHeight),
            Math.round(Math.random() * BinaryRectangleIndividual.imageHeight)
        ];
        // Keeps the left most point as upper left corner x component
        const randX = Math.min(...xValues);
        const width = Math.max(1, Math.max(...xValues) - randX);
        // Keeps the up most point as upper left corner y component
        const randY = Math.min(...yValues);
        const height = Math.max(1, Math.max(...yValues) - randY);
        this.genes = [randX, randY, width, height];
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
exports.BinaryRectangleIndividual = BinaryRectangleIndividual;
