// Function 
function myFunction() {
  // do something
}

// Greatings Functioon
function greatings() {
    console.log("Hello World");
    }

// Function with parameters
function greatings(name) {
    console.log("Hello " + name);
    }

// Function with return
function greatings(name) {
    return "Hello " + name;
    }

// Function with default parameters
function greatings(name = "World") {
    return "Hello " + name;
    }


// Function with multiple parameters
function greatings(name = "World", age) {
    return "Hello " + name + " you are " + age;
    }


// Recursion Functon 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


// Closure Scope

// Global Scope
var a = 1;
let b = 2;
const c = 3;


// local Scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
test();

// clousere Function 
function outer() {
    let a = 1;
    return function inner() {
        let b = 2;
        return a + b;
    }
}
const add = outer();
console.log(add());




// json closure
function saveUrl(){
    return function(url){
        fetch(url)
}
