let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, zombie;
window.onload = function(){
  scene = document.querySelector("a-scene");
  zombie = new Zombie(10,0.5,z);


  loop();
}

function loop(){
  zombie.walk();
}