import { _Shape } from "./interfaces/Shape.interface";
export declare abstract class Shape implements _Shape {
    protected _area: number;
    protected _perimeter: number;
    get area(): number;
    get perimeter(): number;
    abstract computeArea(): number;
    abstract computePerimeter(): number;
}
