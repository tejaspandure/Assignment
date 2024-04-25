

function fibonacci(Value1: number): void {
    var a: number = 1;
    var b: number = 1;
    var result: number[] = [];

    if ( Value1 < 1) {
        console.log("Please enter a number greater than 0.");
        return;
    }

    while (a <= Value1) {
        result.push(a);
        const temp: number = a + b;
        a = b;
        b = temp;
    }

    console.log("Fibonacci Series till", Value1, ":");
    console.log(result.join(', '));
}
var No1: number = 21;
fibonacci(No1);
