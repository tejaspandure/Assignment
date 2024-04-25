function calculateFactors(Value1: number): number[] {
    var factors: number[]= [];
    for (let i = 1; i < Value1; i++) {
        if (Value1 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

var No1: number = 20;
const factors = calculateFactors(No1);
console.log(factors);