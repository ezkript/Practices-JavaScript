const d=document;

export default function smartVideo(video){
    const $video=d.querySelector(video);
    let visib;
    const options = {
            threshold:0.50,
    }
    const observer = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
           if(e.isIntersecting){
                $video.play();
                visib=true;
           } else {
                $video.pause();
                visib=false;
           }
        });
    },options);

    observer.observe($video);
    d.addEventListener('visibilitychange', (e)=>{
        if(d.visibilityState==='visible' && visib){
            $video.play();
        } else if(d.visibilityState==='hidden'){
            $video.pause();
        }
    })
}