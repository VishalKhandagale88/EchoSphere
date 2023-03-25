var daysTag = document.getElementById("daysleft");
var hrsTag = document.getElementById("hrsleft");
var minTag = document.getElementById("minsleft");
var secTag = document.getElementById("secleft");

function offerTimer(){
    var currentDate = new Date();
    var dateNew = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+2,4,0,0);
    var milliSeconds = (dateNew-currentDate)/1000;
    var daysLeft = Math.floor(milliSeconds/3600/24);
    var hrsLeft = Math.floor(milliSeconds/3600)%24;
    var minutesLeft = Math.floor(milliSeconds/60)%60;
    var secondsLeft = Math.floor(milliSeconds)%60;
    daysTag.innerHTML = `${daysLeft} <span>:</span>`;
    hrsTag.innerHTML = `${hrsLeft} <span>:</span>`;
    minTag.innerHTML = `${minutesLeft} <span>:</span>`;
    secTag.innerHTML = `${secondsLeft}`;
}
offerTimer();
setInterval(offerTimer,1000);

const slideWrapper = document.querySelector(".sliderWrapper");
const productSelected = document.querySelectorAll(".availableProducts");
productSelected.forEach((itemSelected,index)=>{
    itemSelected.addEventListener("click",()=>{
        slideWrapper.style.transform = `translateX(${-100*index}vw)`;
    });
});