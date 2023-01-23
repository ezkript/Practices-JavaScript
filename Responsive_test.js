const d=document;
const w=window;

export default function responsive_test(form,test, close){
    d.getElementById(form).addEventListener('submit', (e)=>{
        e.preventDefault();
        const form = e.target;
        const formFields=form.elements;
        console.log(formFields)
        const Url=formFields.url;
        const Width=formFields.width;
        const Height=form.height;
        const customWindow = w.open(Url.value, "test", `width=${Width.value},height=${Height.value},resizable=no`);
        d.addEventListener("click", (e)=>{
            if(e.target.matches(test)){
                d.querySelector(close).disabled=false;
            }
            if(e.target.matches(close)){
                customWindow.close();
                d.querySelector(close).disabled=true;
            }
        });
    });
}