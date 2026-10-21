const target = new Date('2027-02-01T00:00:00+05:00').getTime();
function updateCountdown(){
 const diff=Math.max(0,target-Date.now());
 const values={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};
 for(const [id,val] of Object.entries(values)){const el=document.getElementById(id);if(el)el.textContent=id==='days'?String(val).padStart(3,'0'):String(val).padStart(2,'0');}
}
updateCountdown();setInterval(updateCountdown,1000);
