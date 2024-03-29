import { CreateCanvas, CreateCanvasFree, ObjectImage } from "./GameManager.mjs";

//Create a canvas covering the full background canvas
export class Canvas {
    constructor (canvas, image, zIndex = "2") {
this.canvas = canvas;
this.image = image;
this.bool = false;
this.zIndex = zIndex;
}
//Activate and deactivate canvas with .activate()
activate () {
    if (!this.bool) {
   const thisCanvas = CreateCanvas(this.canvas);
    ObjectImage(this.image, thisCanvas);
    thisCanvas.style.display = "block";
    thisCanvas.style.zIndex = this.zIndex;
    this.bool = true;
} else {
     const canvasThis = document.getElementById(this.canvas);
    if (canvasThis != null) {
        canvasThis.remove();
        this.bool = false;
      }  
}
}
}


//Create a canvas with specified size
export class CanvasFree {
    constructor (canvas, image, left, top, width, height, zIndex = "2") {
this.canvas = canvas;
this.image = image;
this.bool = false;
this.left = left; 
this.top = top;
this.width = width;
this.height = height;
this.zIndex = zIndex;
    }
activate () {
    if (!this.bool) {
   const thisCanvas = CreateCanvasFree(this.canvas, this.left, this.top, this.width, this.height);
    ObjectImage(this.image, thisCanvas);
    thisCanvas.style.display = "block";
    thisCanvas.style.zIndex = this.zIndex;
    this.bool = true;
} else {
     const canvasThis = document.getElementById(this.canvas);
    if (canvasThis != null) {
        canvasThis.remove();
        this.bool = false;
      }  
}
}
}




