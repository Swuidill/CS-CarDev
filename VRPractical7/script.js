let rnd = (l,u) => Math.random() * (u-l) + l;
let scene, camera, gems = [], ball, aliens = [], time_text, score_text, health_text, winScreen, loseScreen;
let health = 100, gems_collected = 0, t = 30;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  ball = new Ball();

  time_text = document.querySelector("#time");
  score_text = document.querySelector("#score");
  health_text = document.querySelector("#health");

  winScreen = document.querySelector("#missionComplete");
  loseScreen = document.querySelector("#gameOver");
  
  for(let z = 0; z < 240; z+= 16.1){
    new Tunnel(0,0,z);
  }
  for(let z = 5; z < 240; z+= 25){
    let x = rnd(-2,2);
    let pz = z + rnd(-2, 2);
    gems.push(new Gem(x,1,-pz));
  }
  for(let z = 240; z > 20; z -= 15){
    let x = rnd(-3,3);
    let pz = z + rnd(-5, 5);
    aliens.push(new Alien(x,0.1,-pz));
  }
  /* Challenge 2
     Shoot the ball when the user presses the space bar.
     Hint: Look at the class. Investigate the key value returned
     when the space bar is pressed.
  */
  window.addEventListener("keydown", function(e){
    if(e.key == " "){
      ball.shoot();
    }
  })
  
  loop();
  countdown();
  
}

function countdown(){
  if(t > 0){
    t--;
  }else{
    health -= 5;
  }
  
  if(gems_collected < 10 && health > 0){
    setTimeout( countdown, 1000);
  }else{
    results();
  }
}

function loop(){
  ball.move();

  /* Challenge 3: Working with the Alien
     1) Make all the Aliens walk
     2) If the ball collides with an Alien ( use a threshold of 1)
           - Set the fire variable of the ball to false
           - Alien dies. Hint: Look at the class
     3) If we collide with the Alien (use a threshold of 2)
     then the alien will attack.  Hint: Look a the class.  
  */
  for(let alien of aliens){
    alien.walk();
    if(distance(alien.obj, ball.obj) < 1){
      ball.fire = false;
      alien.die();
    }

    if(distance(camera, alien.obj) < 2){
      alien.attack();
    }
  }
      
  /* Challenge 4
     Make all the gems float. Hint: Look a the class.
     
  */
  for(let g of gems){
    g.float();
  }
  // Challenge 5 & 6 are in the Gem class 
 
  /* Challenge 7
     Display the time, gems collected and health in the text element
     create in Challenge 1
  */
  
  time_text.setAttribute("value", `Time: ${t}`);
  health_text.setAttribute("value", `Health: ${health}`);
  score_text.setAttribute("value", `Score: ${gems_collected}`);

  if(gems_collected < 10 && health > 0){
    window.requestAnimationFrame( loop );
  }else{
    results();
  }
}

function results(){
  /* Challenge 8
     Display the appropriate image depending on whether the user
     won (gathered 10 gems) or lost (health drops to 0 or less)
  */
  if(gems_collected == 10 && health >= 0){
    winScreen.setAttribute("opacity", 1);
  }else{
    loseScreen.setAttribute("opacity", 1);
  }
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
