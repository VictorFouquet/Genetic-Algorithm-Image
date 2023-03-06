"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    get area() { return this._area === undefined ? this.computeArea() : this._area; }
    get perimeter() { return this._perimeter === undefined ? this.computePerimeter() : this._perimeter; }
}
exports.Shape = Shape;
