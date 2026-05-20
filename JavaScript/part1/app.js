//Console.log

console.log("Hello World!");
console.log("Java Script");

//Conditional statements
let  a = 5;
if(a>5){
    console.log(`${a} is greater than 5`);
} 
else if(a<5) {
    console.log(`${a} is less than 5`);
}
else{
    console.log(`${a} is equal to 5`);
}

//Practice Qs
//Q.1) A "good string" is a string that starts with letter 'a' & has a length > 3.
let string = "A good developer is who understand the logic and everything, and keeps learning";
if (string[0] == 'a' && (string.length > 3)){
    console.log(`${string} is a good string`);
}else{
    console.log(`${string} is a bad string`);
}

//Q.2) Use switch statement to print the day of week using a number variable 'day'with values 1 to 7.
let day = 5; // type numbner with value from 1 to 7

switch(day){
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    case 7: console.log("Sunday");
            break;
    default: console.log("Invalid Value!");
    
}

//Alert and Prompt

alert("This is an ALERTT!");

prompt("Enter anything!");


console.error("This is an error");
console.warn("This is an warning");