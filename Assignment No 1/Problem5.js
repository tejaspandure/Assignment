function fibonacci(Value1) {
    var a = 1;
    var b = 1;
    var result = [];
    if (Value1 < 1) {
        console.log("Please enter a number greater than 0.");
        return;
    }
    while (a <= Value1) {
        result.push(a);
        var temp = a + b;
        a = b;
        b = temp;
    }
    console.log("Fibonacci Series till", Value1, ":");
    console.log(result.join(', '));
}
var No1 = 21;
fibonacci(No1);
