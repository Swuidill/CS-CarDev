let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, r, rockets=[], ufo, ufos=[];

window.onload = function(){
  scene = document.querySelector("a-scene"); 

  // r = new Rocket(0, 3, 0);

  // ufo = new UFO(0,10,0);
  
  for(let i = 0; i<100; i++){
    rocket = new Rocket(rnd(-50, 50), -1, rnd(-50,50));
    rockets.push(rocket);
  }

  for(let i =0;i<50;i++){
    u = new UFO(rnd(-50, 50), rnd(5, 100), rnd(-50, 50), 0);
    ufos.push(u);
  }
  loop();
}

function loop(){
  // r.launch();
  // ufo.invade();
  
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let u of ufos){
    u.invade();
  }
  window.requestAnimationFrame( loop );
}