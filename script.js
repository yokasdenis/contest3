const setTime=document.getElementById("set");
setTime.addEventListener("click",newTimer);
let dataCapture={
    hour:0,
    minute:0,
    second:0
}



function newTimer(){
const hours=document.getElementById("hour");
const minutes=document.getElementById("minute");
const seconds=document.getElementById("second");
const displaySection=document.getElementById("ActiveTimersDisplaySection");
let intervalId;
    // Create a div to display the countdown timer
   const timerDiv=document.createElement("div");
    timerDiv.classList.add("timer");
    timerDiv.id="timex";
    displaySection.appendChild(timerDiv)

const initialHours = parseInt(hours.value) ;
  const initialMinutes = parseInt(minutes.value);
  let initialSeconds = parseInt(seconds.value);

 
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (initialHours === 0 && initialMinutes === 0 && initialSeconds === 0) {
      clearInterval(intervalId);
      displayTimerEnd();
    } else {
      if (initialSeconds === 0) {
        if (initialMinutes === 0) {
          if (initialHours === 0) {
            clearInterval(intervalId);
            displayTimerEnd();
            return;
          } else {
            initialHours--;
            initialMinutes = 59;
          }
        } else {
          initialMinutes--;
        }
        initialSeconds = 59;
      } else {
        initialSeconds--;
      }
      // Update the display
      hours.value = initialHours.toString().padStart(2, "0");
      minutes.value = initialMinutes.toString().padStart(2, "0");
      seconds.value = initialSeconds.toString().padStart(2, "0");
      
       timerDiv.innerHTML=`<span>Set Timer:</span>
      <div>
      <span><b>${hours.value}</b></span>
          <span>:</span>
          <span><b>${minutes.value}</b></span>
          <span>:</span>
          <span><b>${seconds.value}</b></span>
      </div>
      <button onclick="deleteTimer(this)" id="delete">delete</button>`
    }
  }, 1000);
}

function deleteTimer(buttonSelect){
const parentCard=buttonSelect.parentNode;
parentCard.remove();
}

function displayTimerEnd(){
const timed=document.getElementById("timex");
timed.classList.add("hide");
    const timerEnd=document.createElement("div");
    timerDiv.classList.add("timer");
  
    timerDiv.innerHTML=`
    <b>Timer is up</b>
    <button onclick="deleteTimer(this)" id="stop">stop</button>`
    displaySection.appendChild(timerEnd)
}

