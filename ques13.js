const input = require("readline-sync");

let n = input.question("enter the number:");



if(n%2==0){
    console.log(n);
}else
{
    console.log(2*n);
}
