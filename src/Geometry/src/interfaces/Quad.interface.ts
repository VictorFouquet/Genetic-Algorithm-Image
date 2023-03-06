import { Points4 } from "../types/Points4.type";
import { _Polygon } from "./Polygon.interface";

export interface _Quad extends Omit<_Polygon, "points"> {
    points: Points4
}