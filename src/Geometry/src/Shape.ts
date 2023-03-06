import { _Shape } from "./interfaces/Shape.interface";

export abstract class Shape implements _Shape {
    protected _area:      number
    protected _perimeter: number

    get area(): number { return this._area === undefined ? this.computeArea() : this._area; }
    get perimeter(): number  { return this._perimeter === undefined ? this.computePerimeter() : this._perimeter; }

    abstract computeArea(): number
    abstract computePerimeter(): number
}