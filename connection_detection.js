const d=document,
    n=navigator,
    w=window;

export default function connDet(id, msg){
    const $id=d.getElementById(id),
        $msg=d.getElementById(msg),
        online=($id)=>{
            $id.innerHTML=`<p>Connection restored :) </p>`;
            $id.style.background='green';
            $id.style.transform='translate(0,0)';
        },
        offline=($id)=>{
            $id.innerHTML=`<p>Connection lost! :(</p>`;
            $id.style.background='red';
            $id.style.transform='translate(0,0)';
        },
        fadeOut=()=>setTimeout(()=>$id.style.transform='translate(0px,-100px)', 4000),
        onlineMsg=($msg)=>{
            $msg.innerHTML=`Status: <i>online</i>`;
            d.querySelector(`#${msg} i`).style.color='green';
        },
        offlineMsg=($msg)=>{
            $msg.innerHTML=`Status: <i>offline</i>`;
            d.querySelector(`#${msg} i`).style.color='red';
        };
    w.addEventListener("online", ()=>{
        setTimeout(online($id),2000);
        fadeOut();
        onlineMsg($msg);
    });
    w.addEventListener("offline",()=>{
        setTimeout(offline($id),2000);
        fadeOut();
        offlineMsg($msg);
    });
    (n.onLine)
        ?onlineMsg($msg)
        :offlineMsg($msg);
    
}