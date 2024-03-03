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
    m3 = m1
    m4 = c;
} else
{
    m3 = c
    m4 = m1;
} if(m2>m4)
{
    console.log(m2);
} else
{
   console.log(m4);
}