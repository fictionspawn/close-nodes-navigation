import { CreateCanvas, ObjectImage, unit } from './GameManager.mjs';
import { backgroundVar } from './Background.mjs'
import { thisCurrentPlace } from './PlaceClass.mjs';

export var timeLap = 1000 / 3; 

//Make sure the animation stops when the background changes.
function AnimationOnOff(background, image, canvas) {
    if (backgroundVar === background) {
        ObjectImage(image, canvas);
    } else {
        canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.remove();
        return;
    }
}

//Animation starts and ends, without changing the initial image
    export async function AnimationLoop(background, images, canvasId) {
        let canvas = CreateCanvas(canvasId);
            for (let i = 0; i < images.length; i++) {
                    AnimationOnOff(background, images[i], canvas);
                await new Promise(resolve => setTimeout(resolve, timeLap));
                if (i === images.length - 1) 
                {
                    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.remove();
                    return;
         }
        }
    }

    //Animations where the last image stays after the loop
    export async function AnimationLoopStopOnLastImage(background, images, canvasId) {
        let animationPlace = thisCurrentPlace;
        let canvas = CreateCanvas(canvasId)   
        for (let i = 0; i < images.length; i++) {
                AnimationOnOff(background, images[i], canvas);
                await new Promise(resolve => setTimeout(resolve, timeLap));
       }      
    function InsertLastImageCanvas() {
       canvas = CreateCanvas(canvasId);
        ObjectImage(images[images.length - 1], canvas);
    }
    function RemoveAnimationCanvasFunction() {
        canvas.remove();
    }

    animationPlace.activateFunctions.push(InsertLastImageCanvas);
    animationPlace.deactivateFunctions.push(RemoveAnimationCanvasFunction);
}