export function clock(btn1, btn2, btn3, btn4){
    let d = document;
    let $tiempo = document.getElementById("date");
    const interval = () =>{$tiempo.textContent = new Date().toLocaleTimeString();}
    let clockTimer =0;
    const alarm = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3");
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn1)){
            clockTimer = setInterval(interval, 1000);
            document.querySelector(btn1).disabled = true;
        }
        if(e.target.matches(btn2)){
            $tiempo.textContent = '';
            clearInterval(clockTimer);
            document.querySelector(btn1).disabled = false;
        }
        if(e.target.matches(btn3)){
            alarm.play();
            alarm.loop = true;
            document.querySelector(btn3).disabled = true;
        }
        if(e.target.matches(btn4)){
            alarm.pause();
            alarm.currentTime=0;
            document.querySelector(btn3).disabled = false;
        }
    });
}

