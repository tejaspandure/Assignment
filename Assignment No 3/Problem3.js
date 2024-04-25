var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
var circleX1 = new CircleX(5);
var circleX2 = new CircleX(7);
console.log("Object 1:");
console.log("Circumference:", circleX1.Circumference());
console.log("Area:", circleX1.Area());
console.log("\nObject 2:");
console.log("Circumference:", circleX2.Circumference());
console.log("Area:", circleX2.Area());
