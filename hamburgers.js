export default function hamburgerF(btn, menu, btnActive, selected) {
    document.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            document.querySelector(menu).classList.toggle("visible");
            document.querySelector(btnActive).classList.toggle("is-active");
        }
        if(e.target.matches(selected)){
            document.querySelector(menu).classList.remove("visible");
            document.querySelector(btnActive).classList.remove("is-active");
        }
    })
}