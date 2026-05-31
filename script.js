emailjs.init("SzaSgoNUc-5TnEkVd");

function sendMail(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

emailjs.send(
"service_rja51ud",
"template_8gfcpcj",
{
title:"সেই শান্ত মেয়েটা Feedback",
name:name,
email:email,
message:message
}
)
.then(()=>{
alert("❤️ মতামত সফলভাবে পাঠানো হয়েছে");
document.getElementById("feedbackForm").reset();
})
.catch(()=>{
alert("❌ পাঠানো যায়নি");
});
}

const canvas =
document.getElementById("bubbleCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const balls=[];

for(let i=0;i<100;i++){

balls.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*15+5,

dx:(Math.random()-.5)*2,

dy:(Math.random()-.5)*2,

color:`hsla(${Math.random()*360},80%,70%,0.4)`

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

balls.forEach(b=>{

ctx.beginPath();

ctx.arc(
b.x,
b.y,
b.r,
0,
Math.PI*2
);

ctx.fillStyle=b.color;

ctx.fill();

b.x+=b.dx;
b.y+=b.dy;

if(
b.x<0||
b.x>canvas.width
)b.dx*=-1;

if(
b.y<0||
b.y>canvas.height
)b.dy*=-1;

});

requestAnimationFrame(
animate
);

}

animate();