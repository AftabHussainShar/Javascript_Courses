const date=new Date();
console.log(date);

console.log(date.getFullYear());

const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
console.log(months[date.getMonth()]);


date.setDate(23);
console.log(date);


const doomsday=new Date(2020,11,31,23,59,59);
console.log(doomsday);


// const now=new Date();
// const time=now.getTime();
// console.log(time-doomsday);

// const now=new Date();
// const time=now.getTime();
// ;
// let diff =(time-doomsday);
// diff=diff/(1000*60*60*24);

const hours =document.getElementById('hour');
const minutes =document.getElementById('min');
const seconds =document.getElementById('sec');
setInterval(function(){
    const now=new Date();
    hours.innerText=now.getHours();
    minutes.innerText=now.getMinutes();
    seconds.innerText=now.getSeconds();
},1000);



