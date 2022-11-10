const canvas=document.getElementById('lienzo');
const ctx=canvas.getContext('2d');
canvas.width=document.body.offsetWidth
// document.body.innerHTML='<h1>Andrew</h1>'
const w=canvas.width;
const h=canvas.height;
// console.log("Canvas Width:",w)
// console.log("Canvas Height:",h)

// Color de ...
ctx.fillStyle='#000';
ctx.fillRect(0,0,w,h);

const cols=Math.floor(w/20)+1;
const posY=Array(cols).fill(0);


function matrix(){
    ctx.fillStyle='#0001';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle='#0f0';
    ctx.font='15pt monospace';

    posY.forEach((y,ind)=>{
        const text=
        String.fromCharCode(
            Math.random()*128
        )
        const x=ind*20;
        ctx.fillText(text,x,y);
        if(y>100 + Math.random()*1000){
            posY[ind]=0;
        }
        else{
            posY[ind]=y+20;
        }
    });
}
setInterval(matrix,50);