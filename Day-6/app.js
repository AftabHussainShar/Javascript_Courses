// Objects
// let person =  {
//     name:"Aftab",
//     cnic:38723728937,
//     cast:"Shar",
//     eyecolor:"black",
//     speak:"urdu",
//     speaktwo: function(lang){

//         console.log(lang)

//     }
// }

// person.speaktwo("Aftab");
// console.log(person.name)


let person =  {  // Object
    name:"Aftab",  // property
    cnic:38723728937, // key: value
    cast:"Shar",
    eyecolor:"black",
    speak:"urdu",
    speaktwo: function(lang){ // method

        console.log(lang+" My second language is this and my name is "+ this.name)

    }
}

// person.speaktwo("english");
// console.log(person.name)

// let studen1={
//     name:"hamza",
//     roll:348,
//     teacher: "zamir",
//     class:"Java Script"
// }
// let students =[studen1];

// console.log(students)


// person.speaktwo("english");
// console.log(person.name)

// let studen1={
//     name:"hamza",
//     roll:348,
//     teacher: "zamir",
//     class:"Java Script"
// }
// let studen2={
//     name:"basit",
//     roll:342,
//     teacher: "zamir",
//     class:"Java Script"
// }
// let students =[studen1,studen2];

// console.log(students)


// function activestudent(name1,roll1,teacher1,class1){
//     return{
//         name:name1,
//         roll:roll1,
//         teacher: teacher1,
//         class:class1,
//     }
// }

// let students=[
//     activestudent('Aftab',22,"Ali","AftabHussain"),
//     activestudent('Aftab',22,"Ali","AftabHussain"),
//     activestudent('Aftab',22,"Ali","AftabHussain")
// ]

// console.log(students)


// function activestudent(name1,roll1,teacher1,class1){
//     return{
//         name:prompt("Enter the name "),
//         roll:+prompt("Enter your roll no"),
//         teacher: prompt("Enter the teacher name "),
//         class:prompt("Enter the class "),
//     }
// }
// let students=[
//     activestudent()
// ]
// console.log(students)




// students=[];
// function activestudent(){
//     let std={
//         name:prompt("Enter the name "),
//         roll:+prompt("Enter your roll no"),
//         teacher: prompt("Enter the teacher name "),
//         class:prompt("Enter the class "),
//     }
// students.push(std);
// }
// console.log(students);


localStorage.setItem("students","Mehtab");  // set item in local storage


localStorage.getItem("students"); // get item from local storage


// students=[];
// function activestudent(){
//     let std={
//         name:prompt("Enter the name "),
//         roll:+prompt("Enter your roll no"),
//         teacher: prompt("Enter the teacher name "),
//         class:prompt("Enter the class "),
//     }
// students.push(std);
// let stingfiy=JSON.stringify(students);
// localStorage.setItem("students",stingfiy);
// }
// console.log(students);


let getdata=localStorage.getItem("students");
let students=JSON.parse(getdata);
function activestudent(){
    let std={
        name:prompt("Enter the name "),
        roll:+prompt("Enter your roll no"),
        teacher: prompt("Enter the teacher name "),
        class:prompt("Enter the class "),
    }
students.push(std);
let stingfiy=JSON.stringify(students);
localStorage.setItem("students",stingfiy);
}
console.log(students);
