"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneticImageSolver_1 = require("./src/GeneticImageSolver");
const path = require("path");
const fs = require("fs");
/**
 * Entry point, reproduces an image with genetic algorithm
 */
function main() {
    const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'app.config.json')).toString());
    fs.mkdirSync(path.join(process.cwd(), ...config.output, 'step'));
    fs.mkdirSync(path.join(process.cwd(), ...config.output, 'results'));
    fs.mkdirSync(path.join(process.cwd(), ...config.output, 'strokes'));
    const app = new GeneticImageSolver_1.GeneticImageSolver(config.populationSize, config.individualSize, config.maxGenerations, config.mutationRate, config.steps, path.join(process.cwd(), ...config.output));
    app.solve();
}
main();
