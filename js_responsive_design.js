const w = window;
const d = document;
/**
 * Adds responsive design to any element with js
 * @param {*} id Element's id where the content is gonna be placed
 * @param {*} mq Valid CSS Media Query
 * @param {*} DC Content in Desktop
 * @param {*} MC Content in Mobile
 */
export default function responsibleRD(id, mq, DC, MC){
    const breakpoint = w.matchMedia(mq);
    const mediaContent = (e) =>{
        if(e.matches){
            d.querySelector(id).innerHTML = DC;
        } else {
            d.querySelector(id).innerHTML = MC;
        }
    }   
    breakpoint.addEventListener("change",mediaContent);
    mediaContent(breakpoint);
}