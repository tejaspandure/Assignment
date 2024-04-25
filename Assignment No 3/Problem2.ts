class Circle {
    Radius: number;
    PI: number = 3.14;

    constructor(radius: number) {
        this.Radius = radius;
    }

    Area(): number {
        return this.PI * this.Radius * this.Radius;
    }
}


var circle1 = new Circle(5); 
var circle2 = new Circle(7); 

console.log("Area of Circle 1:", circle1.Area()); 
console.log("Area of Circle 2:", circle2.Area()); 