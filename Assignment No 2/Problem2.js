// passing array to the function::::
//Function Defination
function Maximum(A) {
    var i = 0;
    var Sum = 0;
    for (i = 0; i < A.length; i++) {
        Sum = Sum + A[i];
    }
    console.log("Addition is: " + Sum);
}
var A = [23, 6, 7, 4, 5, 7];
//Function call
Maximum(A);
