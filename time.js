 const hourEl = document.getElementById("hour");
 const minuteEl =  document.getElementById("minutes");
 
 const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
   
    hourEl.innerText = h;
    minuteEl.innerText = m;
    
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)

}

updateClock();
