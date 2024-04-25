function Compare(Value1: number , Value2: number, Value3: number): number
{
    let Result : number = Value1;
    if(Value2>Result)
    {
        Result=Value2;
    }
    if(Value3>Result)
    {
        Result=Value3;
    }
    return Result;

}
var A : number = 23;
var B : number = 89;
var C : number = 6;

var Ans=Compare(A,B,C);
console.log("Greater number is: "+Ans);