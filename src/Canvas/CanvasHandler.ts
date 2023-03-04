import { Context2D } from "./Context2D";
import { _CanvasHandler } from "./interfaces/CanvasHandler.interface";
import { _Context2D } from "./interfaces/Context2D.interface";
import { _ImageData } from "./interfaces/ImageData.interface";

export abstract class CanvasHandler<T extends Context2D> implements _CanvasHandler<T> {
    context:   T               // Rendering context of canvas
    imageData: ImageData       // Pixels data of the image
    width:     number          // Width of the canvas
    height:    number          // Height of the canvas

    /** Wrapper for canvas' beginPath function */
    beginPath(): void {
        this.context.beginPath();
    }

    /**
     * Moves context to any position on canvas
     * @param x x position to move to
     * @param y y position to move to
     */
    moveTo(x: number, y: number): void {
        this.context.moveTo(x, y);
    }

    /**
     * Clears canvas and fills background
     * @param color color to fill background
     */
    clear(color: string): void {
        this.context.fillStyle = color;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillRect(0, 0, this.width, this.height);
    }

    /**
     * Fills current path
     * @param color color to fill current path
     */
    fill(color: string): void {
        this.context.fillStyle = color;
        this.context.fill();
    }

    /**
     * Strokes current path
     * @param color color to stroke current path
     * @param width line width of the stroke
     */
    stroke(color: string, width: number): void {
        this.context.strokeStyle = color;
        this.context.lineWidth = width;
        this.context.stroke();
    }

    /**
     * Traces a circle
     * @param x x position of circle's center
     * @param y y position of circle's center
     * @param r circle's radius
     */
    traceCircle(x: number, y: number, r: number): void {
        this.context.moveTo(x + r, y);
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
    }

    /**
     * Traces a line between two points
     * @param x1 origin point x
     * @param y1 origin point y
     * @param x2 end point x
     * @param y2 end point y
     */
    traceLine(x1: number, y1: number, x2: number, y2: number): void {
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
    }

    /**
     * Traces a polygon containing any number of points
     * @param points array of [x, y] coordinates
     */
    tracePolygon(points: number[][]): void {
        this.context.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
            this.context.lineTo(points[i][0], points[i][1]);
        }
        this.context.lineTo(points[0][0], points[0][1]);
    }

    /**
     * Traces a path composed of any number of points
     * @param points array of [x, y] coordinates
     * @param close  wether path should be closed
     */
    tracePath(points: number[][], close: boolean = false): void {
        for (let i = 0; i < points.length; i++) {
            this.context.lineTo(points[i][0], points[i][1]);
        }
        if (close) this.context.closePath();
    }

    /**
     * Traces a rectangle
     * @param x Upper left corner x position
     * @param y Upper left corner y position
     * @param width Width of the rectangle to trace
     * @param height Height of the rectangle to trace
     */
    traceRectangle(x: number, y: number, width: number, height: number): void {
        this.context.moveTo(x, y);
        this.context.lineTo(x + width, y);
        this.context.lineTo(x + width, y + height);
        this.context.lineTo(x, y + height);
        this.context.lineTo(x, y);
    }

    /**
     * Retrieves the canvas' image data
     * @param x Starting x position of data to get
     * @param y Starting y position of data to get
     * @param width Width of data to get
     * @param height Height of data to get
     * @returns The image's data
     */
    getImageData(x: number, y: number, width: number, height: number): _ImageData {
        return this.context.getImageData(x, y, width, height);
    }
}
