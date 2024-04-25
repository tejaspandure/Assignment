function ChkArmstrong(num) {
    var sum = 0;
    var temp = 0;
    temp = No1;
    while (temp > 0) {
        var y = 0;
        y = temp % 10;
        sum += Math.pow(y, 3);
        temp = temp / 10;
    }
    if (No1 == sum) {
        console.log("Armstrong number");
    }
    else {
        console.log("Not Armstrong number");
    }
}
var No1;
No1 = 555;
var num = ChkArmstrong(No1);
