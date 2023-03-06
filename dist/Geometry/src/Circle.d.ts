import { _Circle } from "./interfaces/Circle.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";
export declare class Circle extends Shape implements _Circle {
    protected _center: Point;
    protected _radius: number;
    constructor(center: Point, radius: number);
    get center(): Point;
    get radius(): number;
    computePerimeter(): number;
    computeArea(): number;
}
