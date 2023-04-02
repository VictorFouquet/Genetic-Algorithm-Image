import { GeneticImageSolver } from "./src/GeneticImageSolver";
import * as path from "path";
import * as fs from "fs";


/**
 * Entry point, reproduces an image with genetic algorithm
 */
function main() {
    const config = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'app.config.json')).toString()
    );
    const app: GeneticImageSolver = new GeneticImageSolver(
        config.populationSize,
        config.individualSize,
        config.maxGenerations,
        config.mutationRate,
        config.steps,
        path.join(process.cwd(), ...config.output)
    );
    app.solve();
}

main();
