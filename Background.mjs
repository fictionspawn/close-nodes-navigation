import { CreateCanvas, ObjectImage } from "./GameManager.mjs";

export let backgroundVar;

export const backgroundCanvas = CreateCanvas("background");

//Change the background image.
export function Background(backgroundImage) {
 ObjectImage(backgroundImage, backgroundCanvas)
 backgroundCanvas.style.zIndex = '0';
 backgroundVar = backgroundImage;
}    