const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");
let c = input.questionInt("enter the 3 number:");

if(a>b)
{
    m1 = a
    m2 = b;
} else
{
    m1 = b
    m2 = a;
} if(m1>c)
{
    console.log(m1);
}else
{
    console.log(c);
}