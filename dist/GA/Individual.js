"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
/**
 * Abstract class used to generate, store and cross DNA.
 * All its method must be implemented in child class.
 */
class Individual {
    constructor(size) {
        this.size = size;
        this.genes = [];
    }
}
exports.Individual = Individual;
