import { Background } from "./Background.mjs";
import { CreateButton} from "./GameManager.mjs";
import { example1Image, example2Image, example3Image, example4Image, exampleImage } from "./Images.mjs";
import { EnterDoorButton, ImageCanvasForTextButton, LoadedWhenPlaceClassIsInitiated, LoadedWhenPlaceClassIsRemoved, PlaceTextButton, SceneItemCanvas } from "./PlaceExample.mjs";
import { RemoveTextFunction } from "./TextBubbleScript.mjs";

export class Place {
    constructor (background, navegationButtons = [], newPlaces = [], currentPlace,  buttons = [], canvas = [], activateFunctions = [], deactivateFunctions = []) {
    //Navegation
      this.background = background;
        this.navegationButtons = navegationButtons;
        //other buttons
        this.buttons = buttons;
        //places you go to
        this.newPlaces = newPlaces;
//The place you are at
        this.currentPlace = currentPlace;
        //Objects in the scene
         this.canvas = canvas;
         //functions called when place is activated/deactivated
         this.activateFunctions = activateFunctions;
         this.deactivateFunctions = deactivateFunctions;
    }

    activate() {
      //Load background image
      Background(this.background);
      //functions called at background load
      if (this.activateFunctions.length > 0) {
        for (let i = 0; i < this.activateFunctions.length; i++) { 
          this.activateFunctions[i]();
         } 
      }
      //Basic navegationbuttons
       for (let i = 0; i < this.navegationButtons.length; i++) { 
        this.navegationButtons[i](this.newPlaces[i], this.currentPlace);
       }  
       //All other buttons connected to the background
       if (this.buttons.length > 0) {
        for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i]();
      }}
      //All other  canvases
       if (this.canvas.length > 0) {
        for (let i = 0; i < this.canvas.length; i++) {  
          this.canvas[i]();
       }}
    } 
    deactivate() {
      RemoveTextFunction();
      for (let i = 0; i < this.navegationButtons.length; i++) { 
        this.navegationButtons[i](this.newPlaces[i], this.currentPlace);
       }  
       if (this.buttons.length > 0) {
        for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i]();
       }}
       if (this.canvas.length > 0) {
       for (let i = 0; i < this.canvas.length; i++) {     
        this.canvas[i]();
    }}
    if (this.deactivateFunctions.length > 0) {
      for (let i = 0; i < this.deactivateFunctions.length; i++) { 
        this.deactivateFunctions[i]();
       } 
    }
  }
}

export function Navegate(currentPlace, newPlace) {
  currentPlace.deactivate(); 
  newPlace.activate();
}

//Basic navegation buttons

let leftbutton = false;

function CreateLeftButton(newPlace, currentPlace) {
  if (!leftbutton) {
   let leftbutton = CreateButton("leftbutton", 110, 55, 48, 648, function() {
    Navegate(currentPlace, newPlace)
        });
        leftbutton.style.display = "block";
  } else {
    leftbutton.remove();
  }
 
}

let rightbutton = false;

function CreateRightButton(newPlace, currentPlace) {
if (!rightbutton) {
  let rightbutton = CreateButton("rightbutton", 935, 55, 48, 648, function() {
    Navegate(currentPlace, newPlace)
     });
     rightbutton.style.display = "block";
} else {
  rightbutton.remove();
}   
 }
  
 let backbutton = false;

 function CreateBackButton(newPlace, currentPlace) {
  if (!backbutton) {
    let backbutton = CreateButton("backbutton", 115, 655, 864, 48, function() {
      Navegate(currentPlace, newPlace)
      });
      backbutton.style.display = "block";
  } else {
    backbutton.remove();
  }
 }

 let upbutton = false;

 function CreateUpButton(newPlace, currentPlace) {
  if (!upbutton) {
      upbutton = CreateButton("upbutton", 115, 60, 864, 48, function() {
      Navegate(currentPlace, newPlace)
      });
      upbutton.style.display = "block";
  } else {
    upbutton.remove();
  }
 }

 export let navegation = [CreateLeftButton, CreateRightButton, CreateBackButton]

//Usage examples 
export let example;   //CabinPond
export let example1;  //Riverboat
export let example2;  //Pond
export let example3;  //Buswreck
export let example4;  //insideCabin

//Initiate class objects
example = new Place(exampleImage, navegation, [example1, example3, example2], example, [EnterDoorButton], [SceneItemCanvas], [LoadedWhenPlaceClassIsInitiated], [LoadedWhenPlaceClassIsRemoved]);
example1 = new Place(example1Image, navegation, [example2, example, example3], example1, [PlaceTextButton], [ImageCanvasForTextButton]);
example2 = new Place(example2Image, navegation, [example3, example1, example], example2);
example3 = new Place(example3Image, navegation, [example, example2, example1], example3);
example4 = new Place(example4Image, [CreateBackButton], [example], example4);

//Make sure the objects are initiated when used in other objects of the Place class
example.currentPlace = example;
example.newPlaces = [example1, example3, example2];
example.background = exampleImage;

example1.currentPlace = example1;
example1.newPlaces = [example2, example, example3];

example2.currentPlace = example2;
example2.newPlaces = [example3, example1, example]

example3.currentPlace = example3;
example3.newPlaces = [example, example2, example1];

example4.currentPlace = example4;
example4.newPlaces = [example];
