function calculateFactors(Value1) {
    var factors = [];
    for (var i = 1; i < Value1; i++) {
        if (Value1 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
var No1 = 20;
var factors = calculateFactors(No1);
console.log(factors);
