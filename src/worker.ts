import { applyTheme } from "./utils";

// Web Worker to handle the theme change
onmessage = function (e) {
    const { source, rgb, tones } = e.data;
    applyTheme(source, rgb, tones, updateStyle)

}

function updateStyle(id: string, content: string) {
    postMessage({ id, content });
}