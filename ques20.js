const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");
let c = input.questionInt("enter the 3 number:");
let d = input.questionInt("enter the 4 number:");

if(a<b)
{
    m1 = b
    m2 = a;
} else
{
    m1 = a
    m2 = b;
} if(c<d)
{
    m3 = d
    m4 = c
} else
{
    m3 = c
    m4 = d;
} if (m1<m3)
{
    m5 = m3
    m6 = m1;
} else
{
    m5 = m1
    m6 = m3;
} if(m5<m6)
{
    console.log(m5);
} else
{
     console.log(m6);
}