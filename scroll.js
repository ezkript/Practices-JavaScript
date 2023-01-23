export function scrollTop(button,limit){
    const d=document;
    d.addEventListener("scroll", (e)=>{
        if(window.scrollY>limit){
            d.querySelector(button).style.display="flex";
        } else {
            d.querySelector(button).style.display="none";
        }
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(button)){
            window.scrollTo(0,0);
        }
    });
}