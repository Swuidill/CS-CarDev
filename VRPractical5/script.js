let maze = [
"TTTTTTTx-xxxxxxxTTTTTT",
"TTTTTTTx-xxxxxxxTTTTTT",
"T----x--x--xx-----x--T",
"T--x-x-x-x----xx--x-xT",
"T-x---x-x--x---x---x-T",
"T-x-xxx-x-xxx-xxxxxx-T",
"T-x-----x-----x-----xT",
"T-xxx-x-xxxxx-xxx-x--T",
"T----x-x-----xx--x-x-T",
"T-x-xx--xx-x--x--xxx-T",
"T-x----xxx---x------xT",
"T-xxxxx--x-xxxxxx-xx-T",
"TTTTTTTxxxx-xxxxTTTTTT",
];
let scene;
window.onload = function(){
  scene = document.querySelector("a-scene");
  for(let x = 0; x < maze.length; x++){
    let row = maze[x];
    let cols = row.split("");
    for(let z = 0; z < cols.length; z++){
      if(cols[z] == "x"){
        new Block(x,0.5,z)
      }
      else if(cols[z] == "T"){
        new Tree(x,1,z);
      }else if(cols[z]=="o"){
        new Rock(x,1,z)
      }
    }
    
  }

}