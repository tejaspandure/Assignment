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

class CircleX extends Circle {
    constructor(radius: number) {
        super(radius);
    }

    Circumference(): number {
        return 2 * this.PI * this.Radius;
    }
}


var circleX1 = new CircleX(5); 
var circleX2 = new CircleX(7); 


console.log("Object 1:");
console.log("Circumference:", circleX1.Circumference()); 
console.log("Area:", circleX1.Area()); 

console.log("\nObject 2:");
console.log("Circumference:", circleX2.Circumference()); 
console.log("Area:", circleX2.Area()); 