

//Function Defination
function Summation(A : number[]): void
{
    var i: number =0;
    var Sum = 0;
    for(i=0; i<A.length; i++)
    {
        Sum = Sum + A[i];
    }
    console.log("Addition is: "+Sum);
}
var A : number[]=[23,6,7,4,5,7] ;

//Function call 
Summation(A);

