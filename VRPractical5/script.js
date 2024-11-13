let maze = [
  "TTTTTTTx-xxxxxxxTTTTTT",
  "TTTTTTTx-xxxxxxxTTTTTT",
  "T--x---x-x-xx--x---x-T",
  "T--x-x-x----x--x-x-x-T",
  "T----x-x-x--x--x-x-x-T",
  "T-xx-x-x-x-xx--x-x-x-T",
  "Txxx-xxx-x-----x---x-T",
  "Tx-------xxxxx-xxx-x-T",
  "Tx-xxxxx-xx----------T",
  "Tx-xxxxx--x-x--xxx-x-T",
  "Tx-----x-xx-x--x-x-x-T",
  "Txxxxxxx-xx-x--x---x-T",
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