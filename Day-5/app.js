// Array 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);


// let shoul = prompt("should i store the array");
// if(shoul=="yes"){
// 	arr.push(11);
//     console.log(arr);
// } 


arr.shift(); // remove first element
console.log(arr);


arr.pop(); // remove last element
console.log(arr);


arr.unshift(0); // add element at first
console.log(arr);

arr.length; // length of array
console.log(arr.length);

arr.indexOf(5); // index of element
console.log(arr.indexOf(5));


arr.splice(2, 1); // add element at index 2
console.log(arr);

arr.splice(4, 1, 3); // remove element at index 2
console.log(arr);

arr.slice(2, 4); // slice array from index 2 to 4
console.log(arr.slice(2, 4));


arr.forEach(function (arr) {  // for each loop
    console.log(arr);
}
);


arr.filter(function (arr) {  // filter array
    return arr > 5;
}
);


arr.sort(); // sort array
console.log(arr.sort());


arr.reduce(function (a, b) {  // reduce array
    return a + b;
}
);

arr.map(function (arr) {  // map array
    return arr * 2;
}
);

 