const d=document;

export default function darkMode(button,bg1){
    const darkTheme = () => {
        d.querySelector(bg1).classList.add("activeDarkMode");
        d.querySelector(button).textContent='☀';
        localStorage.setItem('theme', 'dark');
    }
    const lightTheme = () => {
        d.querySelector(bg1).classList.remove("activeDarkMode");
        d.querySelector(button).textContent='🌙';
        localStorage.setItem('theme', 'light');
    }
    d.addEventListener("click", (e)=>{
        if(e.target.matches(button)){
            if(d.querySelector(bg1).classList.contains("activeDarkMode")){
                lightTheme();
            } else {
                darkTheme();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(localStorage.getItem('theme')===null)localStorage.setItem('theme', 'light');
        if(localStorage.getItem('theme')==='dark')darkTheme();
        if(localStorage.getItem('theme')==='light')lightTheme();
    })
}