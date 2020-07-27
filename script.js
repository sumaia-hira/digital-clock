function digitalClock (){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var amPm = hour >= 12 ? 'PM' : 'AM'
    if (hour > 12){
        hour = hour - 12
    }
    
   document.getElementById("hours").innerHTML = hour;
   document.getElementById("minutes").innerHTML = minute;
   document.getElementById("seconds").innerHTML = second;
   document.getElementById("ampm").innerHTML = amPm;
}


setInterval(digitalClock , 1000);
