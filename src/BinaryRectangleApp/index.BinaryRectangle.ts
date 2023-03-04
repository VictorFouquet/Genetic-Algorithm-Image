import { BinaryRectangleSolver } from "./src/BinaryRectangleSolver";
import * as path from "path";

/**
 * Entry point, creates a 100*100px image to solve and a G.A solver accordingly
 */
function main() {
    const app: BinaryRectangleSolver = new BinaryRectangleSolver(
        100, 100, 0.1, 100, 100,
        path.join('.', 'src', 'BinaryRectangleApp', 'out')
    );
    app.solve();
}

main();
