

function offerTimer(){
    var currentDate = new Date();
    var dateNew = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+2,4,14,40);
    var daysLeft = dateNew.getDate()-currentDate.getDate();
    var hrsLeft = Math.abs(dateNew.getHours()-currentDate.getHours());
    var minutesLeft = Math.abs(dateNew.getMinutes()-currentDate.getMinutes());
    var secondsLeft = Math.abs(dateNew.getSeconds()-currentDate.getSeconds());
    console.log(daysLeft,hrsLeft,minutesLeft,secondsLeft);

}

offerTimer();
setInterval(offerTimer,1000);



