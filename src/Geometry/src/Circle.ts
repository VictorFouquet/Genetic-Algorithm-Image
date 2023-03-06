import { _Circle } from "./interfaces/Circle.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Circle extends Shape implements _Circle {
    protected _center:    Point
    protected _radius:    number

    constructor(center: Point, radius: number) {
        super()
        this._center = center;
        this._radius = radius;
    }

    get center(): Point { return this._center; }
    get radius(): number { return this._radius; }

    computePerimeter(): number {
        this._perimeter = 2 * Math.PI * this._radius;
        return this._perimeter;
    }

    computeArea(): number {
        this._area = Math.PI * Math.pow(this._radius, 2);
        return this._area;
    }
}