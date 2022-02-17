//THIS IS THE NEW CLOCK

setInterval(function() {
    const dateNow = new Date() 
    
    document.querySelector("#newclock").innerHTML =
        dateNow.getHours().toString().padStart(2, "0") +
        ":" +
        dateNow.getMinutes().toString().padStart(2, "0") +
        ":" +
        dateNow.getSeconds().toString().padStart(2, "0"); 
        
    
        
}, 1000);

/*var getDate = new Date();
    document.getElementById("date2").innerHTML = `The date is ${getDate.getDate()}/${getDate.getMonth()+1}/${getDate.getFullYear()}`;
/*THIS IS THE Stopwatch 1
const startingMinutes = 20;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--; 
}
*/

setInterval( function() {

    const dateNow = new Date().getTime();
    const dateTarget = new Date (document.querySelector(".date-input").value);

    let difference= dateTarget - dateNow;

    const seconds = Math.floor((difference/1000)%60) 
    const minutes = Math.floor((difference/1000/60)%60)
    const hour = Math.floor((difference/1000/60/60)%24)

    document.querySelector(".contador").innerText = 
    `${hour .toString().padStart(2,"0")}:${minutes .toString().padStart(2,"0")}:${seconds .toString().padStart(2,"0")}`;
    
    if (distance = 0){
        clearInterval(x);
        document.querySelector(".contador").innerHTML = "EXPIRED";
    }

    document.querySelector(".date-button").addEventListener("click", function() {
    dateTarget = new Date(document.querySelector(".date-input").value)})
        
    },1000);