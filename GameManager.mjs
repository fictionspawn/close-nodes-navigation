//Variable to change the size of everything in the game. 
export let unit;
export let textUnit;

  // Adjust size for mobile browser
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
unit = 0.5;
textUnit = 0.6;
} else {
  unit = 0.9;
  textUnit = unit;
}

export const canvasWidth = unit * 897;
export const canvasHeight = unit * 669;

//Draw an image on a specified canvas
    export function ObjectImage(image, canvas) {
      canvas.ctx = canvas.getContext("2d");
        image.bool = true; 
         canvas.style.display = "block";
         canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
       canvas.ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
         }

         

//Add canvas with the same dimensions as the background image
export function CreateCanvas(canvasId) {
 var canvasName = document.createElement("canvas");
 canvasName.id = canvasId;
 canvasName.style.display = "none";
 canvasName.style.position = "absolute";
 canvasName.style.top = unit * 50 + "px";
 canvasName.style.left = unit * 100 + "px";
 canvasName.style.zIndex = '2';
 canvasName.width = canvasWidth;
 canvasName.height = canvasHeight;
 document.body.appendChild(canvasName);
 canvasName.ctx = canvasName.getContext("2d");

    // Return the created canvas
    return canvasName;
 }

 //Add a canvas with specified dimensions
 export function CreateCanvasFree(canvasId, canvasLeft, canvasTop, thisCanvasWidth, thisCanvasHeight) {
var canvasName = document.createElement("canvas");
canvasName.id = canvasId;
canvasName.style.display = "none";
canvasName.style.position = "absolute";
canvasName.style.left = unit * canvasLeft + "px";
canvasName.style.top = unit * canvasTop + "px";
canvasName.style.zIndex = '3';
canvasName.width = unit * thisCanvasWidth;
canvasName.height = unit * thisCanvasHeight;
document.body.appendChild(canvasName);
canvasName.ctx = canvasName.getContext("2d");

   // Return the created canvas
   return canvasName;
}

 //Create different types of buttons
export function CreateButton(elementName, leftPos, topPos, wSize, hSize, thisFunction) {
  var myButton = document.createElement("button");
  myButton.id = elementName;
  myButton.style.display = "none";
  myButton.style.position = "absolute";
 myButton.style.border = "none";
    myButton.style.left = unit * leftPos + "px";
    myButton.style.top = unit * topPos + "px";
  myButton.style.zIndex = "8";
  myButton.style.height = unit * hSize + "px";
  myButton.style.width = unit * wSize + "px";
  myButton.style.cursor = "pointer";
  myButton.style.backgroundColor = "transparent";
  document.body.appendChild(myButton);
   myButton.addEventListener("click", thisFunction)
      
   return myButton;
  } 
