"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ColorConverter_1 = require("../src/ColorConverter");
const TestColors_1 = require("./TestColors");
/**
 * Color space conversion can be prone to rounding imprecisions,
 * and one rgba color can sometimes be written with several different
 * hsla values.
 * Testing values used in this test suite were taken from  w3schools color picker
 * and may differ from corresponding values in other online color pickers apps.
 * https://www.w3schools.com/colors/colors_picker.asp
 */
describe("Testing ColorConverter", () => {
    const colorConverter = new ColorConverter_1.ColorConverter();
    it("Should convert HSLA color to RGBA color", () => {
        const testedLightCyan = colorConverter.hslaToRgba(TestColors_1.colors.lightCyan.hsla);
        expect(testedLightCyan).toEqual(TestColors_1.colors.lightCyan.rgba);
        const testedDarkCyan = colorConverter.hslaToRgba(TestColors_1.colors.darkCyan.hsla);
        expect(testedDarkCyan).toEqual(TestColors_1.colors.darkCyan.rgba);
        const testedLightBlue = colorConverter.hslaToRgba(TestColors_1.colors.lightBlue.hsla);
        expect(testedLightBlue).toEqual(TestColors_1.colors.lightBlue.rgba);
        const testedDarkBlue = colorConverter.hslaToRgba(TestColors_1.colors.darkBlue.hsla);
        expect(testedDarkBlue).toEqual(TestColors_1.colors.darkBlue.rgba);
        const testedLightMagenta = colorConverter.hslaToRgba(TestColors_1.colors.lightMagenta.hsla);
        expect(testedLightMagenta).toEqual(TestColors_1.colors.lightMagenta.rgba);
        const testedDarkMagenta = colorConverter.hslaToRgba(TestColors_1.colors.darkMagenta.hsla);
        expect(testedDarkMagenta).toEqual(TestColors_1.colors.darkMagenta.rgba);
        const testedLightRed = colorConverter.hslaToRgba(TestColors_1.colors.lightRed.hsla);
        expect(testedLightRed).toEqual(TestColors_1.colors.lightRed.rgba);
        const testedDarkRed = colorConverter.hslaToRgba(TestColors_1.colors.darkRed.hsla);
        expect(testedDarkRed).toEqual(TestColors_1.colors.darkRed.rgba);
        const testedLightOrange = colorConverter.hslaToRgba(TestColors_1.colors.lightOrange.hsla);
        expect(testedLightOrange).toEqual(TestColors_1.colors.lightOrange.rgba);
        const testedDarkOrange = colorConverter.hslaToRgba(TestColors_1.colors.darkOrange.hsla);
        expect(testedDarkOrange).toEqual(TestColors_1.colors.darkOrange.rgba);
        const testedLightYellow = colorConverter.hslaToRgba(TestColors_1.colors.lightYellow.hsla);
        expect(testedLightYellow).toEqual(TestColors_1.colors.lightYellow.rgba);
        const testedDarkYellow = colorConverter.hslaToRgba(TestColors_1.colors.darkYellow.hsla);
        expect(testedDarkYellow).toEqual(TestColors_1.colors.darkYellow.rgba);
        const testedLightGreen = colorConverter.hslaToRgba(TestColors_1.colors.lightGreen.hsla);
        expect(testedLightGreen).toEqual(TestColors_1.colors.lightGreen.rgba);
        const testedDarkGreen = colorConverter.hslaToRgba(TestColors_1.colors.darkGreen.hsla);
        expect(testedDarkGreen).toEqual(TestColors_1.colors.darkGreen.rgba);
    });
    it("Should convert RGBA color to HSLA color", () => {
        const testedLightCyan = colorConverter.rgbaToHsla(TestColors_1.colors.lightCyan.rgba);
        expect(testedLightCyan).toEqual(TestColors_1.colors.lightCyan.hsla);
        const testedDarkCyan = colorConverter.rgbaToHsla(TestColors_1.colors.darkCyan.rgba);
        expect(testedDarkCyan).toEqual(TestColors_1.colors.darkCyan.hsla);
        const testedLightBlue = colorConverter.rgbaToHsla(TestColors_1.colors.lightBlue.rgba);
        expect(testedLightBlue).toEqual(TestColors_1.colors.lightBlue.hsla);
        const testedDarkBlue = colorConverter.rgbaToHsla(TestColors_1.colors.darkBlue.rgba);
        expect(testedDarkBlue).toEqual(TestColors_1.colors.darkBlue.hsla);
        const testedLightMagenta = colorConverter.rgbaToHsla(TestColors_1.colors.lightMagenta.rgba);
        expect(testedLightMagenta).toEqual(TestColors_1.colors.lightMagenta.hsla);
        const testedDarkMagenta = colorConverter.rgbaToHsla(TestColors_1.colors.darkMagenta.rgba);
        expect(testedDarkMagenta).toEqual(TestColors_1.colors.darkMagenta.hsla);
        const testedLightRed = colorConverter.rgbaToHsla(TestColors_1.colors.lightRed.rgba);
        expect(testedLightRed).toEqual(TestColors_1.colors.lightRed.hsla);
        const testedDarkRed = colorConverter.rgbaToHsla(TestColors_1.colors.darkRed.rgba);
        expect(testedDarkRed).toEqual(TestColors_1.colors.darkRed.hsla);
        const testedLightOrange = colorConverter.rgbaToHsla(TestColors_1.colors.lightOrange.rgba);
        expect(testedLightOrange).toEqual(TestColors_1.colors.lightOrange.hsla);
        const testedDarkOrange = colorConverter.rgbaToHsla(TestColors_1.colors.darkOrange.rgba);
        expect(testedDarkOrange).toEqual(TestColors_1.colors.darkOrange.hsla);
        const testedLightYellow = colorConverter.rgbaToHsla(TestColors_1.colors.lightYellow.rgba);
        expect(testedLightYellow).toEqual(TestColors_1.colors.lightYellow.hsla);
        const testedDarkYellow = colorConverter.rgbaToHsla(TestColors_1.colors.darkYellow.rgba);
        expect(testedDarkYellow).toEqual(TestColors_1.colors.darkYellow.hsla);
        const testedLightGreen = colorConverter.rgbaToHsla(TestColors_1.colors.lightGreen.rgba);
        expect(testedLightGreen).toEqual(TestColors_1.colors.lightGreen.hsla);
        const testedDarkGreen = colorConverter.rgbaToHsla(TestColors_1.colors.darkGreen.rgba);
        expect(testedDarkGreen).toEqual(TestColors_1.colors.darkGreen.hsla);
    });
    it("Should convert RGBA to hex", () => {
        const testedLightCyan = colorConverter.hexToRGBA(TestColors_1.colors.lightCyan.hex);
        expect(testedLightCyan).toEqual(TestColors_1.colors.lightCyan.rgba);
        const testedDarkCyan = colorConverter.hexToRGBA(TestColors_1.colors.darkCyan.hex);
        expect(testedDarkCyan).toEqual(TestColors_1.colors.darkCyan.rgba);
        const testedLightBlue = colorConverter.hexToRGBA(TestColors_1.colors.lightBlue.hex);
        expect(testedLightBlue).toEqual(TestColors_1.colors.lightBlue.rgba);
        const testedDarkBlue = colorConverter.hexToRGBA(TestColors_1.colors.darkBlue.hex);
        expect(testedDarkBlue).toEqual(TestColors_1.colors.darkBlue.rgba);
        const testedLightMagenta = colorConverter.hexToRGBA(TestColors_1.colors.lightMagenta.hex);
        expect(testedLightMagenta).toEqual(TestColors_1.colors.lightMagenta.rgba);
        const testedDarkMagenta = colorConverter.hexToRGBA(TestColors_1.colors.darkMagenta.hex);
        expect(testedDarkMagenta).toEqual(TestColors_1.colors.darkMagenta.rgba);
        const testedLightRed = colorConverter.hexToRGBA(TestColors_1.colors.lightRed.hex);
        expect(testedLightRed).toEqual(TestColors_1.colors.lightRed.rgba);
        const testedDarkRed = colorConverter.hexToRGBA(TestColors_1.colors.darkRed.hex);
        expect(testedDarkRed).toEqual(TestColors_1.colors.darkRed.rgba);
        const testedLightOrange = colorConverter.hexToRGBA(TestColors_1.colors.lightOrange.hex);
        expect(testedLightOrange).toEqual(TestColors_1.colors.lightOrange.rgba);
        const testedDarkOrange = colorConverter.hexToRGBA(TestColors_1.colors.darkOrange.hex);
        expect(testedDarkOrange).toEqual(TestColors_1.colors.darkOrange.rgba);
        const testedLightYellow = colorConverter.hexToRGBA(TestColors_1.colors.lightYellow.hex);
        expect(testedLightYellow).toEqual(TestColors_1.colors.lightYellow.rgba);
        const testedDarkYellow = colorConverter.hexToRGBA(TestColors_1.colors.darkYellow.hex);
        expect(testedDarkYellow).toEqual(TestColors_1.colors.darkYellow.rgba);
        const testedLightGreen = colorConverter.hexToRGBA(TestColors_1.colors.lightGreen.hex);
        expect(testedLightGreen).toEqual(TestColors_1.colors.lightGreen.rgba);
        const testedDarkGreen = colorConverter.hexToRGBA(TestColors_1.colors.darkGreen.hex);
        expect(testedDarkGreen).toEqual(TestColors_1.colors.darkGreen.rgba);
    });
    it("Should convert hex to RGBA", () => {
        const testedLightCyan = colorConverter.rgbaToHex(TestColors_1.colors.lightCyan.rgba);
        expect(testedLightCyan).toEqual(TestColors_1.colors.lightCyan.hex);
        const testedDarkCyan = colorConverter.rgbaToHex(TestColors_1.colors.darkCyan.rgba);
        expect(testedDarkCyan).toEqual(TestColors_1.colors.darkCyan.hex);
        const testedLightBlue = colorConverter.rgbaToHex(TestColors_1.colors.lightBlue.rgba);
        expect(testedLightBlue).toEqual(TestColors_1.colors.lightBlue.hex);
        const testedDarkBlue = colorConverter.rgbaToHex(TestColors_1.colors.darkBlue.rgba);
        expect(testedDarkBlue).toEqual(TestColors_1.colors.darkBlue.hex);
        const testedLightMagenta = colorConverter.rgbaToHex(TestColors_1.colors.lightMagenta.rgba);
        expect(testedLightMagenta).toEqual(TestColors_1.colors.lightMagenta.hex);
        const testedDarkMagenta = colorConverter.rgbaToHex(TestColors_1.colors.darkMagenta.rgba);
        expect(testedDarkMagenta).toEqual(TestColors_1.colors.darkMagenta.hex);
        const testedLightRed = colorConverter.rgbaToHex(TestColors_1.colors.lightRed.rgba);
        expect(testedLightRed).toEqual(TestColors_1.colors.lightRed.hex);
        const testedDarkRed = colorConverter.rgbaToHex(TestColors_1.colors.darkRed.rgba);
        expect(testedDarkRed).toEqual(TestColors_1.colors.darkRed.hex);
        const testedLightOrange = colorConverter.rgbaToHex(TestColors_1.colors.lightOrange.rgba);
        expect(testedLightOrange).toEqual(TestColors_1.colors.lightOrange.hex);
        const testedDarkOrange = colorConverter.rgbaToHex(TestColors_1.colors.darkOrange.rgba);
        expect(testedDarkOrange).toEqual(TestColors_1.colors.darkOrange.hex);
        const testedLightYellow = colorConverter.rgbaToHex(TestColors_1.colors.lightYellow.rgba);
        expect(testedLightYellow).toEqual(TestColors_1.colors.lightYellow.hex);
        const testedDarkYellow = colorConverter.rgbaToHex(TestColors_1.colors.darkYellow.rgba);
        expect(testedDarkYellow).toEqual(TestColors_1.colors.darkYellow.hex);
        const testedLightGreen = colorConverter.rgbaToHex(TestColors_1.colors.lightGreen.rgba);
        expect(testedLightGreen).toEqual(TestColors_1.colors.lightGreen.hex);
        const testedDarkGreen = colorConverter.rgbaToHex(TestColors_1.colors.darkGreen.rgba);
        expect(testedDarkGreen).toEqual(TestColors_1.colors.darkGreen.hex);
    });
});
