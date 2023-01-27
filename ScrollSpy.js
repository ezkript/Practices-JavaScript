const d=document;

export default function scrollSpy(items, menuItem){
    const list = d.querySelectorAll(items);
    const menuItems=d.querySelectorAll(menuItem);
    const options = {
            root:d.querySelector(".container"),
            threshold:1.0,
    }
    const observer = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            if(e.isIntersecting){
                menuItems.forEach((el)=>{
                    if(el.innerText===e.target.innerText){
                        el.classList.add("spy");
                    }
                });
            } else {
                menuItems.forEach((el)=>{
                    if(el.innerText===e.target.innerText){
                        el.classList.remove("spy");
                    }
                });
            }
            
        });
    },options);
    
    list.forEach((e)=>{
        observer.observe(e);
    });
    
}