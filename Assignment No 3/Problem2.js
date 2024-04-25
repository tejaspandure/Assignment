var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.Radius = radius;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var circle1 = new Circle(5);
var circle2 = new Circle(7);
console.log("Area of Circle 1:", circle1.Area());
console.log("Area of Circle 2:", circle2.Area());
