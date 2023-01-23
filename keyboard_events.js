const d=document;

export function control(up, down, left, right, ball, background){
    let increaseY=0;
    let increaseX=0;
    const $maxHeight=d.getElementById(background).getBoundingClientRect().height/2;
    const $maxWidth=d.getElementById(background).getBoundingClientRect().width/2;
    const $ball=d.getElementById(ball).getBoundingClientRect().width/2+1;

    d.addEventListener("keydown",(e)=>{
        if(e.key===up && increaseY>(-($maxHeight-$ball))){
            increaseY-=10;
            d.getElementById(ball).style.transform=`translate(${increaseX}px,${increaseY}px)`;
        }
        if(e.key===down && increaseY<($maxHeight-$ball)){
            increaseY+=10;
            d.getElementById(ball).style.transform=`translate(${increaseX}px, ${increaseY}px)`;
        }
        if(e.key===left && increaseX>(-($maxWidth-$ball))){
            increaseX-=10;
            d.getElementById(ball).style.transform=`translate(${increaseX}px,${increaseY}px)`;
        }
        if(e.key===right && increaseX<($maxWidth-$ball)){
            increaseX+=10;
            d.getElementById(ball).style.transform=`translate(${increaseX}px,${increaseY}px)`;
        }
    });
}

export function shortcuts(){
    d.addEventListener("keydown", (e)=>{
        if(e.altKey && e.key==='a'){
            alert("Hola");
        }
        if(e.altKey && e.key==='p'){
            prompt("eso");
        }
        if(e.altKey && e.key==='c'){
            confirm("eso tmb");
        }
    });

}