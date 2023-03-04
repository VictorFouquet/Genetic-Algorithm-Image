import { CanvasHandler } from "./CanvasHandler";
import { Canvas, CanvasRenderingContext2D } from "canvas";
/**
 * Canvas handler extended to be a node canvas handler
 */
export declare class NodeCanvasHandler extends CanvasHandler<CanvasRenderingContext2D> {
    context: CanvasRenderingContext2D;
    /**
     * Builds a node canvas handler instance
     * @param canvas canvas to handle
     */
    constructor(canvas: Canvas);
}
