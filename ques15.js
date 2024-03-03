const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");
let c = input.questionInt("enter the 3 number:");
let d = input.questionInt("enter the 3 number:");

if(a>b)
{
    p = a
    q = b;
} else
{
    p = b
    q = a;
} if(c>d)
{
    r =c
    s = d;
} else
{
    r = d
    s = c;
} if(p>r)
{
    console.log(p);
} else
{
    console.log(r);
}