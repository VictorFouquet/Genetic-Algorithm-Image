import { BinaryQuadSolver } from "./src/BinaryQuadSolver";
import * as path from "path";

/**
 * Entry point, creates a 100*100px image to solve and a G.A solver accordingly
 */
function main() {
    const app: BinaryQuadSolver = new BinaryQuadSolver(
        200, 1000, 0.1, 4, 100, 100,
        path.join('.', 'src', 'BinaryQuadsApp', 'out')
    );
    app.solve();
}

main();
