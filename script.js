// Data Types
const number = 10;
const string = "Hello World";
const boolean = true;
const array = [1, 2, 3];
const object = { name: "John", age: 30 };
const nullValue = null;
const undefinedValue = undefined;

        // const vs let
        const numArray = [1, 2, 3, 4, 5];
        // numArray = [1, 2, 3, 4, 5, 6];
        numArray.push(6);

// Conditional Statements

const emptyString = "";
const zero = 0;
const emptyObj = {};
const emptyArray = [];

// if( condition ) {
//     code to be executed if condition is true
// } else {
//     code to be executed if condition is false
// }

if(number > 5) {
    console.log("number is greater than 5");
} else if(number === 5){
    console.log("number is equal to 5");
} else {
    console.log("number is less than 5");
}

number > 5 ? console.log("number is greater than 5") : console.log("number is less than or equal to 5");

if (emptyString) {
    console.log("emptyString is truthy");
} 

if(zero) {
    console.log("zero is truthy");
}

if(emptyObj) {
    console.log("emptyObj is truthy");
}

if(emptyArray) {
    console.log("emptyArray is truthy");
}

// Loops

// for (initialization; condition; increment/decrement;) {
//     code to be executed
// }

        // simple for loop
        for(let i = 0; i < 5; i++) {
            console.log(i);
        }

        // for loop with array
        const fruits = ["apple", "banana", "orange"];
        for(let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

// Functions

        // function <function-name>(parameters) {
        //     code to be executed
        // }

        function greet() {
            console.log("Hello World");
        }
        greet();

        // ES6 Syntax
            // const <function-name> = (parameters) => {
                // code to be executed
            // }
            const greet2 = () => {
                    console.log("Hello World");
                }
                greet2();
        // Parameters and Arguments
            // Parameters are the variables listed inside the parentheses in the function definition.
            // Parameters work as placeholders for the values that are to be passed to the function when it is invoked.
            // Arguments are the values received by the function when it is invoked.
            
            function add(a, b) {
                return a + b;
            }
            console.log(add(1, 2));

            // The return statement is used to return a value from a function. 
            // It specifies the value to be returned to the caller.
            // If the return statement is omitted, the function will return undefined.
            // The return statement ends the execution of the function.

// Document Object Model (DOM)

console.log(document)
const h1 = document.getElementById("h1");
console.log(h1)
// h1.textContent = "Hello World";
// h1.style.color = "red";

const button = document.createElement("button");
button.textContent = "Click me";
// document.body.prepend(button);

// Events

// <element>.addEventListener("event", function() {
//     code to be executed
// });

let isDarkMode = false;

button.addEventListener('click', function(){
    if(isDarkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDarkMode = false;
    }else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDarkMode = true;
    }
})