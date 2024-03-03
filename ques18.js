const input = require("readline-sync");

let s = input.questionInt("enter the 1 number:");

if(s<=10000)
{
    hra = 0.2*s
    d = 0.8*s
    g = (hra+d+s);
    
} else if (s<=20000)
{
    hra = s*25/100
    d = s*90/100
    g = (hra+d+s);
   
} else if (s>20000)
{
    hra = s*30/100
    d = s*90/100
    g = (hra+d+s);
   
} 
console.log(g);
