let rnd = (l,u) => Math.floor(Math.random()*(u-l)+l);
let trees = [], snowmen = [], snowflakes = [], gifts = [], sky, r, g, b, opacity;

window.onload = function() {
  scene = document.querySelector("a-scene");
  /* Challenge
     Create a variable for the snowmanTemplate.
  */
  snowmanTemplate = document.getElementById("snowman");
  sky = document.querySelector("a-sky");
  r = 255;
  g = 0; 
  b = 0;
  opacity = 0;
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    trees.push(new Tree(x,z));
    x = rnd(-20,20);
    z = rnd(-20,20);
    snowmen.push(new Snowman(x,z));
    x = rnd(-20,20);
    z = rnd(-20,20);
    gifts.push(new Gift(x,z));
    
  }
  for(let i = 0; i < 500; i++){
    let x = rnd(-20,20);
    let y = rnd(10, 40);
    let z = rnd(-20,20);
    snowflakes.push(new Snowflake(x,y,z));
  }
    
  loop();
}
function loop(){
  for(let tree of trees){
    tree.falldown();
  }
  for(let snowman of snowmen){
    snowman.spin();
  }
  for(let snowflake of snowflakes){
    snowflake.fall();
  }
  for(let gift of gifts){
    gift.roam();
  }

  if(r == 255 && b < 256){
    b++;
    sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
    
  }
  if(b == 255 && r >= 1){
      r -= 1;
      sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
  }
  if(b == 255 && g < 256){
      g++;
      sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
  }
  if(g == 255 && b >= 1){
      b -= 1;
      sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
  }
  if(g == 255 && r < 256){
      r++;
      sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
  }
  if(r == 255 && g >= 1){
      g -= 1;
      sky.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
  }
  setTimeout(loop,10);
}


