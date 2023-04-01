import { GeneticImageSolver } from "./src/GeneticImageSolver";
import * as path from "path";


/**
 * Entry point, reproduces an image with genetic algorithm
 */
function main() {
    const app: GeneticImageSolver = new GeneticImageSolver(
        100, 200, 0.1, 25, 100, 100,
        path.join('.', 'src', 'GeneticImageApp', 'out', 'test')
    );
    app.solve();
}

main();
