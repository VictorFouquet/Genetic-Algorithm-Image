import { RGBAcolor } from "../src/RGBAcolor";
import { HSLAcolor } from "../src/HSLAcolor";

// Sample colors used for unit tests
export const colors = {
    lightCyan: {
        rgba: new RGBAcolor(192, 235, 236),
        hsla: new HSLAcolor(181, 0.54, 0.84),
        hex:  "#c0ebecff" 
    },
    darkCyan: {
        rgba: new RGBAcolor( 20,  25,  25),
        hsla: new HSLAcolor(180, 0.11, 0.09),
        hex:  "#141919ff" 
    },
    lightBlue: {
        rgba: new RGBAcolor(140, 161, 237),
        hsla: new HSLAcolor(227, 0.73, 0.74),
        hex:  "#8ca1edff" 
    },
    darkBlue: {
        rgba: new RGBAcolor( 22,  35,  80),
        hsla: new HSLAcolor(227, 0.57,  0.2),
        hex:  "#162350ff" 
    },
    lightMagenta: {
        rgba: new RGBAcolor(233, 178, 235),
        hsla: new HSLAcolor(298, 0.59, 0.81),
        hex:  "#e9b2ebff" 
    },
    darkMagenta: {
        rgba: new RGBAcolor( 81,   8,  84),
        hsla: new HSLAcolor(298, 0.83, 0.18),
        hex:  "#510854ff" 
    },
    lightRed: {
        rgba: new RGBAcolor(242,  13,  13),
        hsla: new HSLAcolor(  0, 0.90,  0.5),
        hex:  "#f20d0dff" 
    },
    darkRed: {
        rgba: new RGBAcolor( 89,   3,   3),
        hsla: new HSLAcolor(  0, 0.93, 0.18),
        hex:  "#590303ff" 
    },
    lightOrange: {
        rgba: new RGBAcolor(235, 129,  71),
        hsla: new HSLAcolor( 21, 0.80, 0.60),
        hex:  "#eb8147ff" 
    },
    darkOrange: {
        rgba: new RGBAcolor( 52,  28,  14),
        hsla: new HSLAcolor( 22, 0.58, 0.13),
        hex:  "#341c0eff" 
    },
    lightYellow: {
        rgba: new RGBAcolor(234, 229, 123),
        hsla: new HSLAcolor( 57, 0.73, 0.70),
        hex:  "#eae57bff" 
    },
    darkYellow: {
        rgba: new RGBAcolor( 40,  38,   1),
        hsla: new HSLAcolor( 57, 0.95, 0.08),
        hex:  "#282601ff" 
    },
    lightGreen: {
        rgba: new RGBAcolor(202, 238, 196),
        hsla: new HSLAcolor(111, 0.55, 0.85),
        hex:  "#caeec4ff" 
    },
    darkGreen: {
        rgba: new RGBAcolor(  5,  24,   2),
        hsla: new HSLAcolor(112, 0.85, 0.05),
        hex:  "#051802ff" 
    }
} as const