class UFO{
  constructor(x, y ,z, r){
    this.x = x;
    this.y = y;

    let rndSpeed = rnd(1,9);
    this.dy = rndSpeed/100;
    this.z = z;

    this.r = 0;
    this.dr = rnd(-20,20);

    this.obj = document.createElement("a-entity");
    let top = document.createElement("a-sphere");
    let body = document.createElement("a-torus");
    let light1 = document.createElement("a-sphere");
    let light2 = document.createElement("a-sphere");

    top.setAttribute("color", "gray");
    top.setAttribute("radius", 0.75);
    top.setAttribute("position", {x: 0, y: 1.5, z:0});

    body.setAttribute("position", {x:0, y:1, z:0});
    body.setAttribute("color", "#FFFFF");
    body.setAttribute("rotation", {x:90, y:0, z:0});

    light1.setAttribute("color", "yellow");
    light1.setAttribute("radius", 0.25);
    light1.setAttribute("position", {x:-0.5, y:1, z:1.2});

    light2.setAttribute("color", "yellow");
    light2.setAttribute("radius", 0.25);
    light2.setAttribute("position", {x:0.5, y:1, z:1.2});

    this.obj.append(top);
    this.obj.append(body);
    this.obj.append(light1);
    this.obj.append(light2);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:r, z:0});
    scene.append(this.obj);
  }
  invade(){
    this.y -= this.dy;
    this.r += this.dr;
    if(this.y < 0){
      this.y = -0.75;
      this.dr = 0;
    }
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
  }
}