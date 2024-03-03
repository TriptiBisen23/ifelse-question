const input = require("readline-sync");

let u = input.questionInt("enter the 1 number:");

if(u<50)
{
    a = u*50/100
    sc = a*20/100
    b = (a+sc);
} else if (u<150)
{
    m = 50*0.5
    n = (u-50)*0.75
    a = m+n
    sc = a*20/100
    b = (a+sc);
} else if(u<250)
{
    m = 50*0.5
    n = 100*0.75
    o = (u-150)*1.2
    a = m+n+o
    sc = a*20/100
    b = (a+sc);
} else if(u>250)
{
    m = 50*0.5
    n = 100*0.75
    o = 100*1.2
    p = (u-250)*1.5
    a = (m+n+o+p)
    sc = a*20/100
    b = (a+sc);
} console.log(b);
