const d=document;

export default function lottery(competitors, btn){
    const $competitors=d.querySelectorAll(competitors);
    let list = Array.from($competitors),
        winner=0;
    
    d.addEventListener("click", (e)=>{
        winner=Math.trunc(Math.random()*10);
        if(e.target.matches(btn)){
            alert(`Winner: ${list[winner].innerHTML}`);
            console.log("Winner: ", list[winner].innerHTML);
        }
    });
}