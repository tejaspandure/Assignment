function Maximum(arr: number[])
{
    if (arr.length < 2) {
        throw new Error("Array should contain at least two numbers");
    }

    var firstMax : number =Number.MIN_VALUE;
    var secondMax : number =Number.MIN_VALUE;
    var i : number = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}


var numbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var secondMaxNumber: number = Maximum(numbers);
console.log("Second maximum number is: "+secondMaxNumber);