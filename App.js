
const hours = document.querySelector(".hours");

const minutes = document.querySelector(".minutes");

let seconds = document.querySelector(".seconds");

let format =document.querySelector(".format");


let div = document.querySelector(".div");


format.style.marginLeft = "2rem";
format.style.fontWeight = "900";



setInterval(()=>{
  
  let date = new Date();


let getHours = date.getHours();
let getMinutes = date.getMinutes();
let getSeconds = date.getSeconds();

seconds.innerHTML = getSeconds;

hours.innerHTML = getHours;
minutes.innerHTML = getMinutes;
console.log("hi")

let zero = "0";
if(getMinutes< 10){
  minutes.innerHTML = `${zero}${getMinutes}`;
}
 if (getSeconds < 10) {
  seconds.innerHTML = `${zero}${getSeconds}`;
 
}
 if (getHours < 10) {
  hours.innerHTML = `${zero}${getHours}`;
}
if (getHours == 0) {
  hours.innerHTML = 12;
  
}
if (getHours > 12) {
  hours.innerHTML -= 12;
  format.innerHTML = "PM";
  
}

if(getHours <12){
  format.innerHTML = "AM";
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dates = date.getDate();
let month = months[date.getMonth()]
let year = date.getFullYear();




function getCalendar() {
  div.innerHTML = `${dates} ${month} ${year}`
}

getCalendar();

})

const items = [hours, minutes, seconds];

items.forEach(item=>{
  item.style.paddingTop="1rem";
  item.style.paddingLeft="1rem";
})

