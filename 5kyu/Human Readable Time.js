//[5 kyu] Human Readable Time
function humanReadable(seconds) {
    hrs = Math.floor(seconds / 3600);
    min = Math.floor((seconds - (hrs*3600)) / 60)
    sec = seconds - (hrs*3600) - (min*60);
    return leadingZero(hrs)+':'+leadingZero(min)+':'+leadingZero(sec)
  }
    
  function leadingZero(nr){
    if(nr < 10) nr = '0'+nr.toString();
    return nr;
  }