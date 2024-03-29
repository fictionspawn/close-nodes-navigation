import { CreateButton, canvasWidth, canvasHeight, unit, textUnit } from './GameManager.mjs';


var canvasId = 'textbubblecanvas';

export function TextBubble(bubbleTextString) {

  var canvas = document.createElement("canvas");
 canvas.id = canvasId;
 canvas.style.display = "none";
 canvas.style.position = "absolute";
 canvas.style.top = unit * 50 + "px";
 canvas.style.left = unit * 100 + "px";
 canvas.style.zIndex = '8';
 document.body.appendChild(canvas);
 canvas.ctx = canvas.getContext("2d");

   
   canvas.ctx.font = `italic bold ${textUnit * 20}px Arial`;

   var lines = bubbleTextString.split('\n');
 
   var lgth = 0;
   var longest;
   
   for (var i = 0; i < lines.length; i++) {
     if (lines[i].length > lgth) {
       var lgth = lines[i].length;
       longest = lines[i];
     }
   }
      
   var textWidth = canvas.ctx.measureText(longest).width;
   var textHeight = parseInt(canvas.ctx.font.match(/\d+px/)[0]);
   

   canvas.height = textHeight * lines.length + 6;
   canvas.width = textWidth + 40; 

   canvas.ctx.font = `italic bold ${textUnit * 20}px Arial`;

   canvas.style.backgroundColor = "black"
   canvas.ctx.fillStyle = "orange";
   canvas.ctx.textAlign = 'start';
   canvas.ctx.textBaseline = 'top';
   canvas.style.top = unit * 70 + "px";
   canvas.style.left = unit * 120 + "px";
canvas.style.zIndex = "8";

for (var i = 0; i<lines.length; i++)
canvas.ctx.fillText(lines[i], 20, 4 + (i * textHeight));

}

export let textBool = false;

export function DisplayTextFunction(bubbleTextString) {
 if (textBool !== "Something's coming!") {
    var canvas = document.getElementById('textbubblecanvas');
    canvas.style.display = 'block';

    var lines = bubbleTextString.split('\n');

    canvas.ctx.font = `italic bold ${textUnit * 20}px Arial`;

    var lgth = 0;
    var longest;
    
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length > lgth) {
        var lgth = lines[i].length;
        longest = lines[i];
      }
    }

    var textWidth = canvas.ctx.measureText(longest).width;
    var textHeight = parseInt(canvas.ctx.font.match(/\d+px/)[0]);

    canvas.height = textHeight * lines.length + 6;
    canvas.width = textWidth + 40; 

    canvas.ctx.font = `italic bold ${textUnit * 20}px Arial`;
    canvas.ctx.fillStyle = "orange";
    canvas.ctx.textAlign = 'start';
    canvas.ctx.textBaseline = 'top';

    for (var i = 0; i<lines.length; i++)
canvas.ctx.fillText(lines[i], 20, 4 + (i * textHeight));

if (bubbleTextString == textBool) {
  RemoveTextFunction();
} else {
  textBool = bubbleTextString;
}}
}


let textBubbleText = `Error`;
TextBubble(textBubbleText);

export function RemoveTextFunction() {
    var canvas = document.getElementById('textbubblecanvas');
    canvas.style.display = 'none';
    textBool = false;
}

export var removetextbutton = CreateButton('removetextbutton', 100, 50, canvasWidth / unit, canvasHeight / unit, function() {
    RemoveTextFunction()
}) 
removetextbutton.style.zIndex = '4';
removetextbutton.style.cursor = 'default';
removetextbutton.style.display = 'block';