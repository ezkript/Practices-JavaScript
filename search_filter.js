const d=document;

export default function searchFilter(id){
    const $id = d.getElementById(id);
    let list=[],
        search="",
        listFiltered=[];
    
    d.addEventListener('keyup',(e)=>{
        if(e.target.matches(`#${id}`)){
            search=$id.value;
            list=Array.from(d.querySelectorAll(".img-description"));        
            listFiltered=list.filter((value)=>value.innerText.match(new RegExp(`${search}`,"i")));
            list.forEach(element=>(!listFiltered.includes(element))
                ?element.style.display='none'
                :element.style.display='inline-block');
        }
    });
}