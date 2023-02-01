const d=document,
    w=window;

export default function smartVideo(video){
    const $video=d.querySelector(video);
    const options = {
            threshold:0.50,
    }
    const observer = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
           if(e.isIntersecting){
                $video.play();
           } else {
                $video.pause();
           }
           
           w.addEventListener('visibilitychange', (e)=>{
               if(d.visibilityState==='visible'){
                   $video.play();
               } else if(d.visibilityState==='hidden'){
                   $video.pause();
               }
           });
        });
    },options);

    observer.observe($video);
}