
var days = 0, hours = 0, minutes = 0, seconds = 0; // variables for time units

function getCountdown(countdown){

   // find the amount of "seconds" between now and target
   var current_date = new Date().getTime();
   var seconds_left = (target_date - current_date) / 1000;
   if (seconds_left >= 0) {
      days = pad( parseInt(seconds_left / 86400) );
      seconds_left = seconds_left % 86400;
          
      hours = pad( parseInt(seconds_left / 3600) );
      seconds_left = seconds_left % 3600;
           
      minutes = pad( parseInt(seconds_left / 60) );
      seconds = pad( parseInt( seconds_left % 60 ) );

   }
   // format countdown string + set tag value
   countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
   return (n < 10 ? '0' : '') + n;
}

