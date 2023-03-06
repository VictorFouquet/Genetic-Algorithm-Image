"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(center, radius) {
        super();
        this._center = center;
        this._radius = radius;
    }
    get center() { return this._center; }
    get radius() { return this._radius; }
    computePerimeter() {
        this._perimeter = 2 * Math.PI * this._radius;
        return this._perimeter;
    }
    computeArea() {
        this._area = Math.PI * Math.pow(this._radius, 2);
        return this._area;
    }
}
exports.Circle = Circle;
