function ChkArmstrong(num : number)
{
    var sum : number = 0;
    var temp : number = 0;
    temp = No1;
    while(temp>0)
    {
        var y : number =0;
        y=temp%10;
        sum+=y**3;
        temp=temp/10;
    }
    
    if(No1==sum)
    {
        console.log("Armstrong number");
    }
    else{
        console.log("Not Armstrong number");
    }
    


}

var No1 : number;
No1 = 153;
var num =ChkArmstrong(No1);

