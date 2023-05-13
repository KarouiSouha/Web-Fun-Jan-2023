function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
  function getHour(time) {
    time %= 43200; // seconds in 12 hours
    return ((360 * time / 43200) + 180) % 360;
  }
  
  function getMinute(time) {
    time %= 3600; 
    return ((6 * time / 60) + 180) % 360;
  }
  function getSecond(time) {
    time %= 60; // seconds in a minute
    return ((6 * time) + 180) % 360;
  }
  const hour = document.getElementById("hour");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      hour.style.transform = `rotate(${getHour(time)}deg)`;
      minutes.style.transform = `rotate(${getMinute(time)}deg)`;
      seconds.style.transform = `rotate(${getSecond(time)}deg)`;
     }, 1000);