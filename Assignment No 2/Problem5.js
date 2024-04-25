function ChkString(inputString) {
    var searchString = "Marvellous";
    if (inputString = searchString) {
        return "String contains Marvellous in it.";
    }
    else {
        return "String does not contain Marvellous.";
    }
}
var input = "Pune Kothrud Marvellous Infosystems";
var result = ChkString(input);
console.log(result);
