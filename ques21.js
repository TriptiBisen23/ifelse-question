const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");
let c = input.questionInt("enter the 3 number:");
let d = input.questionInt("enter the 4 number:");
let e = input.questionInt("enter the 5 number:");
let f = input.questionInt("enter the 6 number:");
let g = input.questionInt("enter the 7 number:");
let h = input.questionInt("enter the 8 number:");

if(a>b)
{
    m1 = a
    m2 = b;
} else
{
    m1 = b
    m2 = a;
} if(c>d)
{
    m3 = c
    m4 = d;
} else
{
    m3 = d
    m4 = c;
} if(e>f)
{
    m5 = e
    m6 = f;
} else
{
    m5 = f
    m6 = e;
}  if(g>h)
{
    m7 = g
    m8 = h;
} else
{
    m7 = h
    m8 = g;
} 
if(m1>m3)
{
    max =m1
    min =m3
    r = m2;
    
}  else
{
    max =m3
    min =m1
    r = m4;
    
     
}  if(m5>m7)
{
    max1 =m5
    min1=m7
    r1 = m6;
    
    
} else
{
    max1 =m7
    min1=m5
    r1 = m8;
    

} if(max>max1)
{
  a=max
  a1=max1
  a2=min;
} else
{
   a=max1
  a1=max
  a2=min1;
    
} if(r>r1)
{
    p=r
    p1=r1;
}
else{
    p=r1
    p=r;
}
if(a1>a2)
{
    l=a1
    l1=a2;
}
else{
    l=a2
    l1=a1;
}
if(p>l)
{
    console.log(p)
}
else
{
    console.log(l)
}
