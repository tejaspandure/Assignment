function Maximum(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
// Test data
var numbersArray = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = Maximum(numbersArray);
console.log("Maximum number is: " + Result);
