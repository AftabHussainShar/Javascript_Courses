// let para= document.getElementById('Aftab');
// para.innerText = 'Hello World';



let para = document.querySelector('#Aftab');
para.innerHTML = '<b>Hello World</b>';
para.style.color = 'red';
para.style.backgroundColor = 'yellow';
console.log(para);


// setInterval(() => {
//     if (para.style.color == 'blue') {
//         para.style.color = 'red';
//         para.style.backgroundColor = 'yellow';
//     } else {
//     para.style.color = 'blue';
//     para.style.backgroundColor = 'white';
//     }

// }, 1000);


// para.style.width = '100%';
// setInterval(function()  {
//     let width = para.style.width;
//     if(width == '100%'){
//         para.style.width = '10%';
//     }else{
//         width = width.replace('%', '');
//         para.style.width = width + 10 + '%';
//     }
// }, 1000);

// Color changing and background color 
setInterval(function()  {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    let color1 = Math.floor(Math.random() * 16777215).toString(16);
    para.style.color = '#' + color;
    para.style.backgroundColor = '#' + color1;
}, 1000);


let name = 'Aftab';
name = 'Aftab2';
const name2 = 'Aftab';
name2 = 'Aftab2';