"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const Shape_1 = require("./Shape");
class Polygon extends Shape_1.Shape {
    constructor(points) {
        super();
        this._points = points;
    }
    get points() { return this._points; }
    computePerimeter() {
        let sum = 0;
        // Sums the polygon's segments lengths
        for (let i = 0; i < this._points.length; i++) {
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a = this._points[i];
            const b = this._points[j];
            const len = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
            sum += Math.sqrt(len);
        }
        this._perimeter = sum;
        return this._perimeter;
    }
    computeArea() {
        let sum = 0;
        for (let i = 0; i < this._points.length; i++) {
            // Using Gauss' shoelace formula :
            // Multiply the x coordinate of each vertex by the y coordinate of the next vertex.
            // Multiply the y coordinate of each vertex by the x coordinate of the next vertex.
            // Sum the results
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a = this._points[i];
            const b = this._points[j];
            sum += a.x * b.y - a.y * b.x;
        }
        this._area = Math.abs(sum) / 2;
        return this._area;
    }
}
exports.Polygon = Polygon;
