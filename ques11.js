const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");

if(a%2==0)
{
    console.log("even");
} else
{
    console.log("odd");
}
