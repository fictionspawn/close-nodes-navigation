import { ActionButton } from "./ActionButtonClass.mjs";
import { Canvas, CanvasFree } from "./CanvasClass.mjs";
import { Navegate, example, example4 } from "./PlaceClass.mjs";
import { TextButton } from "./TextButtonClass.mjs";

// load images
const imageForSceneItemCanvas = new Image();
imageForSceneItemCanvas.src = "../Your/Image/Path.jpg";
const imageForTextButtonCanvas = new Image();
imageForTextButtonCanvas.src = "../Your/Image/Path.jpg";

// function to be called when button is clicked
function EnterDoorFunction() {
   Navegate(example, example4)
}

// Initialize buttons
const enterDoorButton = new ActionButton("actionbutton", 350, 430, 110, 250, EnterDoorFunction);
const placeTextButton = new TextButton("placetextbutton", 220, 380, 206, 320, "You  clicked the text button, and text is shown.");

// initialize canvas
const sceneItemCanvas = new Canvas("sceneitemcanvas", imageForSceneItemCanvas);
const imageCanvasForTextButton = new CanvasFree("imagecanvasfortextbutton", imageForTextButtonCanvas , 220, 380, 206, 320);


//Activate buttons when place is loaded, and remove them when changed.
export function EnterDoorButton() {
enterDoorButton.activate();
}

export function PlaceTextButton() {
  placeTextButton.activate();
}

//Activate canvas and images when place is loaded, and remove them when changed.
export function SceneItemCanvas() {
    sceneItemCanvas.activate();
}

export function ImageCanvasForTextButton() {
    imageCanvasForTextButton.activate();
}

let theThingThatHappened = false;

//functions to be called when place is loaded.
export function LoadedWhenPlaceClassIsInitiated() {
if (!theThingThatHappened) {
    theThingThatHappened = true;
} 
}

//functions to be called when place is removed.
export function LoadedWhenPlaceClassIsRemoved() {
    theThingThatHappened = false;
}


