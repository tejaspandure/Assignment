function ChkString(inputString: string): string
{
    var searchString: string = "Marvellous";

    if (inputString=searchString) {
        return "String contains Marvellous in it.";
    
        
    } else {
        return "String does not contain Marvellous.";
        
    }
}


var input: string = "Pune Kothrud Marvellous Infosystems";
var result: string = ChkString(input);
console.log(result);
