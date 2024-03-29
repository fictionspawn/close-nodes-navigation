import { CreateButton } from "./GameManager.mjs";

export class ActionButton {
    constructor(name, left, top, width, height, ThisDo, zIndex = "10") {
        this.name = name;
        this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.bool = false;
    this.ThisDo = ThisDo;
    this.zIndex = zIndex;

    }
    //Activates and deactivates the button
    activate() {
        if (!this.bool) 
        {    
                CreateButton(this.name, this.left, this.top, this.width, this.height, this.ThisDo);
                    const buttonName = document.getElementById(this.name);
                    buttonName.style.display = "block";
            this.bool = true;
} else {
let element = document.getElementById(this.name);
element.remove();
this.bool = false;
}}}
