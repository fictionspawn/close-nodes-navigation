import { CreateButton, } from "./GameManager.mjs";
import { DisplayTextFunction } from "./TextBubbleScript.mjs";

export class TextButton {
    constructor(name, left, top, width, height, text) {
        this.name = name;
        this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.bool = false;
        this.text = text;
    }
    //Activate and deactivate the textbutton when the place is activated/deactivated
    activate () {
        if (!this.bool) {
            CreateButton(this.name, this.left, this.top, this.width, this.height, () => {
               DisplayTextFunction(this.text);
                });
                const buttonName = document.getElementById(this.name);
                buttonName.style.display = "block";
                this.bool = true;
        } else {
            const buttonName = document.getElementById(this.name);
            buttonName.remove();
            this.bool = false;
        }
    }
}