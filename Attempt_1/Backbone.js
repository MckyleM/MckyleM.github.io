//CUBE

function Cube(){
const cube = document.querySelector('.cube');
let mouseX =0;
let mouseY = 0;
const rotVal = 270;
const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = (mouseY/window.innerHeight+0.5) *rotVal;
  rotateY = (mouseX/window.innerHeight+0.5) *rotVal;
  document.querySelector(".cube").style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}}
window.addEventListener("mousemove", handleMouseMove );
