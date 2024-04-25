function ChkPrime(Value1) {
    var Result = 0;
    Result = Value1;
    if (Result % 2 == 0) {
        console.log("It is not prime number");
    }
    else {
        console.log("It is a prime number");
    }
    return Result;
}
var No1 = 11;
var pr = 0;
pr = No1;
pr = ChkPrime(No1);
