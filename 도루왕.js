var ct=200; // 사용할 이용권 개수
var sel = 3; // 도전 항목
const rr={"2":"EASY","3":"NORMAL","4":"HARD"}; _drw_ing=!1,rundrw=(async e=>{if(_drw_ing)return;_drw_ing=!0;const n={EASY:"2루",NORMAL:"3루",HARD:"홈"};console.info(n[e],"시도!");const a=async e=>new Promise(n=>{setTimeout(()=>n(),e)}),r=async(t=0)=>{const c=0===t?await(async()=>{return(await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=apply",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8","content-type":"application/json;charset=UTF-8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:'{"vtype":"'+e+'"}',method:"POST",mode:"cors"})).json()})():await(async()=>{return(await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=changeRandom",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"POST",mode:"cors"})).json()})();await a(200),c.v1+c.v2>=8||5===t?await(async()=>{const r=await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=steal",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"POST",mode:"cors"});if("O"===(await r.json()).status){await a(200),await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=getRewardSet",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"POST",mode:"cors"}),await a(200);const r=await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=confirmReward",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"POST",mode:"cors"}),t=await r.json();console.info(n[e],"성공!!",t.selected_item_nm)}else{const a=await fetch("https://ya9.haangame.com/gmc/steal.nhn?m=confirmReward",{credentials:"include",headers:{accept:"application/json, text/plain, */*","accept-language":"ko,en;q=0.9,ja;q=0.8"},referrer:"https://ya9.haangame.com/gmc/index.nhn",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"POST",mode:"cors"}),r=await a.json();console.info(n[e],"실패;;",r.selected_item_nm)}})():await r(t+1)};await r(),_drw_ing=!1}); async function repdrw(ny) { if (ny) {if (ct==0) {ny=false;} else {await rundrw(rr[sel]); ct--} repdrw(ny);}} repdrw(true);
