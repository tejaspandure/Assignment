function Compare(Value1, Value2, Value3) {
    var Result = Value1;
    if (Value2 > Result) {
        Result = Value2;
    }
    if (Value3 > Result) {
        Result = Value3;
    }
    return Result;
}
var A = 23;
var B = 89;
var C = 6;
var Ans = Compare(A, B, C);
console.log("Greater number is: " + Ans);
