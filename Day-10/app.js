// Sync 

console.log("Program Ended");

// Async

if (err) return console.error(err);
console.log(data.toString());

console.log("Program Ended");


// Callbacks
function greet(callback) {
console.log('Hello!');
var data = {
name: 'John Doe'
}
callback(data);
}

greet(function(data) {
console.log('The callback was invoked!');
console.log(data);
});

greet(function(data) {
console.log('A different callback was invoked!');
console.log(data.name);
});

