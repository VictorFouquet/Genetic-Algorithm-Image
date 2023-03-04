import { _Context2D } from "./Context2D.interface";
import { _ImageData } from "./ImageData.interface";

export interface _CanvasHandler<Context> {
    context:   Context   // Rendering context of canvas
    imageData: ImageData // Pixels data of the image
    width:     number    // Width of the canvas
    height:    number    // Height of the canvas

    beginPath():                          void // Starts a new path
    moveTo(x: number, y:number):          void // Moves canvas cursor to [x, y] point
    clear(color: string):                 void // Clears canvas and fills background
    fill(color: string):                  void // Fills current path
    stroke(color: string, width: number): void // Strokes current path
    // Traces a circle given its center and radius
    traceCircle(x: number, y: number, r: number):                        void;
    // Traces a line given two 2d points coordinates
    traceLine(x1: number, y1: number, x2: number, y2: number):           void;
    // Traces a path, composed of a list of points
    tracePath(points: number[][]):                                       void;
    // Traces a polygon, composed of a list of points
    tracePolygon(points: number[][], close: boolean):                    void;
    traceRectangle(x: number, y: number, width: number, height: number): void;
    // Gets canvas' image data
    getImageData(x: number, y: number, width: number, height: number):   _ImageData
}
