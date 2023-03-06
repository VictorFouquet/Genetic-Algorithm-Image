"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
}
exports.Point = Point;
