function greet(Name, greetText) {
    console.log(greetText + " " + Name);
    console.log(Name + " is a good boy");
}

function sum(a,b,c)
{
    let d = a + b + c;
    return d;
}

let Name1 = "Harry";
let Name2 = "Shubman";
let Name3 = "Rohan";
let Name4 = "Sagar";

let greetText = "Good Morning";

greet(Name1, greetText);
greet(Name2, greetText);
greet(Name3, greetText);
greet(Name4, greetText);

// let returnVal = greet(Name3);
// console.log(returnVal);

let returnVal = sum (1,5,3);
console.log(returnVal);