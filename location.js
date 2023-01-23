const d=document,
    n=navigator;

export default function location(showLocation){
    const $sL=d.querySelector(showLocation);

    n.geolocation.getCurrentPosition((position)=>{
        $sL.insertAdjacentHTML("afterend", `
            <p>Latitude: ${position.coords.latitude}
            <br>
            Longitude: ${position.coords.longitude}
            <br>
            Acurracy: ${position.coords.accuracy}
            </p>
            <br><br>
            <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" style="color: gold; text-decoration:none; font-weight: bold" target="_blank">Show in maps</a>
        `);
    },(err)=>console.log("An error has ocurred!"), {enableHighAccuracy:true,timeout:5000});
    
    
}