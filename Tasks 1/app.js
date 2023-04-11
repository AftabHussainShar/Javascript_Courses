// // Task 1 Write a JavaScript program that accepts two numbers in two prompts and
// // displays the larger one in the console

// var num10 = prompt("Enter first number");
// var num22 = prompt("Enter second number");
// if (num10 > num22) {
//     console.log(num10);
// } else {
//     console.log(num22);
// }

// // Task 2 Write a JavaScript conditional statement to find the sign of product of two
// // numbers. Display an alert box with the specified sign.

// var num11 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// // var num3 = prompt("Enter third number");
// var product = num11 * num2 ;
// if (product > 0) {
//     console.log("The sign is +");
// }
// else if (product < 0) {
//     console.log("The sign is -");
// }
// else {
//     console.log("This isn't a number");
// }


// // Task 3 Write a JavaScript program that accepts five numbers in five prompts and
// // displays the larger one in the console

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let num3 = prompt("Enter third number");
// let num4 = prompt("Enter fourth number");
// let num5 = prompt("Enter fifth number");
// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log(num1);
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     console.log(num2);
// }
// else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     console.log(num3);
// }
// else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     console.log(num4);
// }
// else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//     console.log(num5);
// }
// else {
//     console.log("This isn't a number");
// }


// // Task 4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// // will check if the current number is odd or even, and display a message to the
// // screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// // TAsk 5 Write a JavaScript program which computes the average marks of the
// // following students Then, this average is used to determine the corresponding
// // grade
// // <60 F
// // <70 D
// // <80 C
// // <90 B
// // <100 A

// let student1 = prompt("Enter  student's marks");

// if (student1 >= 0 && student1 < 60) {
//     console.log("F");
// }
// else if (student1 >= 60 && student1 < 70) {
//     console.log("D");
// }
// else if (student1 >= 70 && student1 < 80) {
//     console.log("C");
// }
// else if (student1 >= 80 && student1 < 90) {
//     console.log("B");
// }
// else if (student1 >= 90 && student1 < 100) {
//     console.log("A");
// }
// else {
//     console.log("This isn't a number");
// }


// // Task 6 . Write a JavaScript program which iterates the integers from 1 to 100. But for
// // multiples of three print "Fizz" instead of the number and for the multiples of five
// // print "Buzz". For numbers which are multiples of both three and five print
// // "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }


// // Task 7 Write a JavaScript program to construct the following pattern, using a nested
// // for loop.
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log("*");
//     }
//     console.log("");
// }



