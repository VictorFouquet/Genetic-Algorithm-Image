"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCanvasHandler = void 0;
const CanvasHandler_1 = require("./CanvasHandler");
/**
 * Canvas handler extended to be a node canvas handler
 */
class NodeCanvasHandler extends CanvasHandler_1.CanvasHandler {
    /**
     * Builds a node canvas handler instance
     * @param canvas canvas to handle
     */
    constructor(canvas) {
        super();
        this.context = canvas.getContext('2d');
    }
}
exports.NodeCanvasHandler = NodeCanvasHandler;
