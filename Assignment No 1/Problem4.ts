function ChkPrime(Value1: number)
{
    var Result : number =0;
    Result=Value1;
    if(Result%2==0)
    {
        console.log("It is not prime number");
    }
    else
    {
        console.log("It is a prime number");
    }
    return Result; 
}
var No1: number = 11;
var pr: number =0;
pr=No1;
pr=ChkPrime(No1);