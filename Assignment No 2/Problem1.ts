function Maximum(numbers: number[]): number {
    var max: number = numbers[0];
    var i : number = 0;
    for ( i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}


var numbersArray: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var Result : number = Maximum(numbersArray);

console.log("Maximum number is: "+Result);