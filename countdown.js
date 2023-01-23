export function countdown(text,date,finalMsg){
    const CDUpdate = setInterval(()=>{
        let dateNow=new Date();
        let daysNow = Math.floor(Math.abs((new Date().getTime()-date.getTime())/(1000*60*60*24)));
        let hoursDate=date.getHours();
        let hoursNow;
        let minutesDate=date.getMinutes();
        let minutesNow;
        let secondsDate=date.getSeconds();
        let secondsNow;
        if(hoursDate>=dateNow.getHours()){
            hoursNow=hoursDate-dateNow.getHours() ; 
        } else {
            hoursNow=(hoursDate+24) - dateNow.getHours();
        }
        if(minutesDate>=dateNow.getMinutes()){
            minutesNow=minutesDate-dateNow.getMinutes() ; 
        } else {
            minutesNow=(minutesDate+60) - dateNow.getMinutes();
        }
        if(secondsDate>=dateNow.getSeconds()){
            secondsNow=secondsDate-dateNow.getSeconds();
        } else {
            secondsNow=(secondsDate+60) - dateNow.getSeconds();
        }
        document.querySelector(text).textContent = `${daysNow} days ${hoursNow} hours ${minutesNow-1} minutes ${secondsNow} seconds`;
        if(daysNow==0 && hoursNow==0 && minutesNow==0 && secondsNow==0){
            document.querySelector(text).textContent = finalMsg;
            clearInterval(CDUpdate);
        }
    }, 1000);
    
}