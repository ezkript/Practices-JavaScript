const d=document;

export default function slider(btn1, btn2, content){
    const $content = d.querySelectorAll(content);
    let clickCounter=0, slide=0;

    d.addEventListener("click", (e)=>{
        let viewportWidth=d.querySelector("body").offsetWidth;
        if(e.target.matches(btn1)){
            if(clickCounter!=$content.length-1 && clickCounter>=0){
                slide+=(($content[0].offsetWidth)*100)/viewportWidth;
                for(let i=0; i<$content.length; i++){
                    $content[i].style.transform=`translate(-${slide}vw,0px)`;
                }
                clickCounter++;
            }
            
        }
        if(e.target.matches(btn2)){
            if(clickCounter>=1 || clickCounter>$content.length){
                clickCounter--;
                slide-=(($content[0].offsetWidth)*100)/viewportWidth;
                for(let i=0; i<$content.length; i++){
                    $content[i].style.transform=`translate(-${slide}vw,0px)`;
                }
            }
        }
    });
}