class Rocket{
  constructor(x, y, z){
    this.x = x;
    this.y = y;

    let rndSpeed = rnd(1,9);
    this.dy = rndSpeed/100;
    this.z = z;

    this.obj = document.createElement("a-entity");
    let coneTop = document.createElement("a-cone");
    let cylinder = document.createElement("a-cylinder");
    let coneBottom = document.createElement("a-cone");

    coneTop.setAttribute("position", {x:0,y:0,z:0});
    coneTop.setAttribute("radius-top", 0);
    coneTop.setAttribute("radius-bottom", 0.5);
    coneTop.setAttribute("height", 1);
    coneTop.setAttribute("color", "red");

    cylinder.setAttribute("radius", 0.5);
    cylinder.setAttribute("height", 2);
    cylinder.setAttribute("color", "gray");
    cylinder.setAttribute("position", {x:0,y:-1.5,z:0});

    coneBottom.setAttribute("radius-top", 0);
    coneBottom.setAttribute("radius-bottom", 0.25);
    coneBottom.setAttribute("height", 2);
    coneBottom.setAttribute("color", "orange");
    coneBottom.setAttribute("position", {x:0, y:-3.5, z:0});
    coneBottom.setAttribute("rotation", {x:-180, y:0, z:0});

    this.obj.append(coneTop);
    this.obj.append(cylinder);
    this.obj.append(coneBottom);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj)
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }
}