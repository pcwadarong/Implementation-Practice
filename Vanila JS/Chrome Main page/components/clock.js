const $hourAndMin = document.querySelector("#clock #hourAndMin");
const $second = document.querySelector("#second");
const $day = document.querySelector("#day");

const weekday = { 0 : 'Sunday', 1 : 'Monday', 2 : 'Tuesday', 3 : 'Wednesday', 4 : 'Thursday', 5 : 'Friday', 6 : 'Saturday', }

function setClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0"); 
  const seconds = String(date.getSeconds()).padStart(2,"0"); 
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const dayOfWeek = weekday[date.getDay()];
  $hourAndMin.innerText = `${hours}:${minutes}`;
  $second.innerText = ` ${seconds}`;
  $day.innerText = `${month} / ${day} / ${year} ${dayOfWeek}`;
}

setClock();
setInterval(setClock, 1000);