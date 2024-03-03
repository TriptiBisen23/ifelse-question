const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");

if(a>b)
{
    console.log("a is greater");
} else
{
    console.log("b is greater");
}