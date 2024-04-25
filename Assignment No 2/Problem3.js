function Maximum(arr) {
    if (arr.length < 2) {
        throw new Error("Array should contain at least two numbers");
    }
    var firstMax = Number.MIN_VALUE;
    var secondMax = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var secondMaxNumber = Maximum(numbers);
console.log("Second maximum number is: " + secondMaxNumber);
