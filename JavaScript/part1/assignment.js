//1
let num = 23; //Any numner
if (num%10 == 0) {
    console.log("good")
}else {
    console.log("bad")
}

//2
let name = prompt("Enter your name");
let age = prompt("Enter you age");


alert(`${name} is ${age} years old.`)

//3
let Q = 3; // Number 1-4
switch(Q){
    case 1: 
        console.log("January,February, March")
        break;
    case 2:
        console.log("April, May, June")
        break;
    case 3:
        console.log("July, August, September")
    case 4:
        console.log("October, November, December")
}

//4
let str = "A golden string is which start with first letter of alphabet and have length greater than 5";
if ((str[0]=='a'||str[0]=='A')&& str.length > 5){
    console.log("It is a golden string")
}else{
    console.log("It is not a golden string")
}


//5
let a = 78;
let b = 29;
let c = 87; // 3 numbers

if (a>b){
    if (a>c){
        console.log(`${a} is the largest number`)
    }
    else{
        console.log(`${c} is the largest number`)
    }
}else{
    if (b>c){
        console.log(`${b} is the largest number`)
    }
    else{
        console.log(`${c} is the largest number`)
    }
}


//6
let n1 = 32;
let n2 = 47852;
if (n1%10 == n2%10){
    console.log(true)
}else{
    console.log(false)
}