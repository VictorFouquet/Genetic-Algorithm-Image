import { _CyclicQuad } from "./interfaces/CyclicQuad.interface";
import { Circle } from "./Circle";
import { Quad } from "./Quad";
export declare class CyclicQuad extends Quad implements _CyclicQuad {
    protected _circle: Circle;
    constructor(circle: Circle);
    get circle(): Circle;
    private computePoints;
}
