import { _Polygon } from "./interfaces/Polygon.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Polygon extends Shape implements _Polygon {
    protected _points:    Point[];
    protected _area:      number;
    protected _perimeter: number;

    constructor(points: Point[]) {
        super()
        this._points = points;
    }

    get points():    Point[] { return this._points; }

    computePerimeter(): number {
        let sum: number = 0;
        // Sums the polygon's segments lengths
        for (let i = 0; i < this._points.length; i++) {
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a: Point = this._points[i];
            const b: Point = this._points[j];
            const len: number = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
            sum += Math.sqrt(len);
        }
        this._perimeter = sum;

        return this._perimeter;
    }

    computeArea(): number {
        let sum: number = 0;
        for (let i = 0; i < this._points.length; i++) {
            // Using Gauss' shoelace formula :
            // Multiply the x coordinate of each vertex by the y coordinate of the next vertex.
            // Multiply the y coordinate of each vertex by the x coordinate of the next vertex.
            // Sum the results
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a: Point = this._points[i];
            const b: Point = this._points[j];
            sum += a.x * b.y - a.y * b.x;
        }
        this._area = Math.abs(sum) / 2;

        return this._area;
    }
}