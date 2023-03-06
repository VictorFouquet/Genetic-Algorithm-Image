"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quad = void 0;
const Polygon_1 = require("./Polygon");
class Quad extends Polygon_1.Polygon {
    constructor(points) {
        super(points);
    }
    get points() { return this._points; }
}
exports.Quad = Quad;
