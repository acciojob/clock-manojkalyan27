//your JS code here. If required.
let clocktime =document.getElementById('timer');

function currentTimer(){
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let currentDate = (month+1)+"/" + day+"/" + "/" + year;


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours>12){
        hours = hours - 12;
    } if(minutes<10){
        minutes ="0"+minutes;
    }if(seconds<10){
        seconds ="0"+seconds;
    }
let currentTime = hours+":"+ minutes + ":" + seconds;
let output = currentDate+", "+ currentTime;

if(hours>12){
    output = currentDate+", "+ currentTime + " PM";
}else{
    output = currentDate+", "+ currentTime +" AM";
}
// console.log(output);
	clocktime.innerText = output;
}
    setInterval(currentTimer,1000);
    
    
    