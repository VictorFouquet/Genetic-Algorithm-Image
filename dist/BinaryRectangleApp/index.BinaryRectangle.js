"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryRectangleSolver_1 = require("./src/BinaryRectangleSolver");
const path = require("path");
/**
 * Entry point, creates a 100*100px image to solve and a G.A solver accordingly
 */
function main() {
    const app = new BinaryRectangleSolver_1.BinaryRectangleSolver(100, 100, 0.1, 100, 100, path.join('.', 'src', 'BinaryRectangleApp', 'out'));
    app.solve();
}
main();
