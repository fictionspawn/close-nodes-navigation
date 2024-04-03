import { thisCurrentBackground } from "./PlaceClass.mjs";
import { DisplayTextFunction } from "./TextBubbleScript.mjs";
import { AnimationLoop, AnimationLoopStopOnLastImage} from "./AnimationManager.mjs";

// Animation images
const firstAnimationImage = new Image();
firstAnimationImage.src = "PATH_TO_IMAGE_1";
const secondAnimationImage = new Image();
secondAnimationImage.src = "PATH_TO_IMAGE_2";
const thirdAnimationImage = new Image();
thirdAnimationImage.src = "PATH_TO_IMAGE_3";
const fourthAnimationImage = new Image();
fourthAnimationImage.src = "PATH_TO_IMAGE_4";

const animationArray = [firstAnimationImage, secondAnimationImage, thirdAnimationImage, fourthAnimationImage];

// Buttons to start the animations
const animationButton = new ActionButton("animationbutton", 350, 430, 110, 250, ExampleAnimationLoop)
const animationStopOnLastButton = new ActionButton("animationstoponlastbutton", 350, 430, 110, 250, ExampleAnimationLoopStopOnLast)

//Animation starts only when it is not already running.
let animationIsRunning = false;

export async function ExampleAnimationLoop() {
   if (!animationIsRunning) {
    animationIsRunning = true;
    await AnimationLoop(thisCurrentBackground, animationArray, "animationcanvas");
    animationIsRunning = false;
   }
}

//Stop the animation when the background is changed
export function StopAnimation() {
    if (animationIsRunning) {
        let thisCanvas = document.getElementById("animationcanvas");
        if (thisCanvas !== null) {
            thisCanvas.remove();
        }
    }
}

// Animation runs only once, and the last image stays.
let animationStopOnLastIsCalled = false;

export async function ExampleAnimationLoopStopOnLast() {
    if (!animationStopOnLastIsCalled) {
     animationStopOnLastIsCalled = true;
     await AnimationLoopStopOnLastImage(thisCurrentBackground, animationArray, "animationstoponlastcanvas");
    } else {
        DisplayTextFunction("Now the object is moved.")
    }
 }

 export function StopAnimationStopOnLast() {
    if (animationStopOnLastIsCalled) {
        let thisCanvas = document.getElementById("animationstoponlastcanvas");
        if (thisCanvas !== null) {
            thisCanvas.remove();
        }
    }}

        export function AnimationButton() {
        animationButton.activate();
        }
        
        export function AnimationStopOnLastButton() {
            animationStopOnLastButton.activate();
        }
        