'use strict';

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;            
    }

    calcArea(){
        return this.height*this.width;
    }
}


class ColorRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(this);
    }

}



const   square = new Rectangle(10,10),
        square1 = new Rectangle(20,10),
        square2 = new ColorRectangleWithText(20,30,'Test class', 'red');



// console.log(square.calcArea());
// console.log(square1);

console.log(square2.calcArea());
square2.showMyProps();