const input = require("readline-sync");

let y = input.questionInt("enter the year:");


if(y%100!=0)
{
    if(y%4==0)
    {
        console.log("leap");
    } else
    {
        console.log("notleap");
    }
} else if(y%400==0)
{
    console.log("leap");
} else
{
    console.log("notleap");
}

