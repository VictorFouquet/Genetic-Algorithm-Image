import { Context2D } from "./Context2D";
import { _CanvasHandler } from "./interfaces/CanvasHandler.interface";
import { _ImageData } from "./interfaces/ImageData.interface";
export declare abstract class CanvasHandler<T extends Context2D> implements _CanvasHandler<T> {
    context: T;
    imageData: ImageData;
    width: number;
    height: number;
    /** Wrapper for canvas' beginPath function */
    beginPath(): void;
    /**
     * Moves context to any position on canvas
     * @param x x position to move to
     * @param y y position to move to
     */
    moveTo(x: number, y: number): void;
    /**
     * Clears canvas and fills background
     * @param color color to fill background
     */
    clear(color: string): void;
    /**
     * Fills current path
     * @param color color to fill current path
     */
    fill(color: string): void;
    /**
     * Strokes current path
     * @param color color to stroke current path
     * @param width line width of the stroke
     */
    stroke(color: string, width: number): void;
    /**
     * Traces a circle
     * @param x x position of circle's center
     * @param y y position of circle's center
     * @param r circle's radius
     */
    traceCircle(x: number, y: number, r: number): void;
    /**
     * Traces a line between two points
     * @param x1 origin point x
     * @param y1 origin point y
     * @param x2 end point x
     * @param y2 end point y
     */
    traceLine(x1: number, y1: number, x2: number, y2: number): void;
    /**
     * Traces a polygon containing any number of points
     * @param points array of [x, y] coordinates
     */
    tracePolygon(points: number[][]): void;
    /**
     * Traces a path composed of any number of points
     * @param points array of [x, y] coordinates
     * @param close  wether path should be closed
     */
    tracePath(points: number[][], close?: boolean): void;
    /**
     * Traces a rectangle
     * @param x Upper left corner x position
     * @param y Upper left corner y position
     * @param width Width of the rectangle to trace
     * @param height Height of the rectangle to trace
     */
    traceRectangle(x: number, y: number, width: number, height: number): void;
    /**
     * Retrieves the canvas' image data
     * @param x Starting x position of data to get
     * @param y Starting y position of data to get
     * @param width Width of data to get
     * @param height Height of data to get
     * @returns The image's data
     */
    getImageData(x: number, y: number, width: number, height: number): _ImageData;
}
