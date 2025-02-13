class Zombie{
    constructor(x,y,z){
      this.z = z;
      this.dz = 0.075;
  
      this.obj = document.createElement("a-gltf-model");
      this.obj.setAttribute("src","#Zombie");
      this.obj.setAttribute("animation-mixer",{timeScale: 2.0});
      this.obj.setAttribute("dynamic-body","");
      this.obj.setAttribute("position",{x:x,y:y,z:this.z});
      scene.append(this.obj);    
    }
    walk(){
      this.z += this.dz;
      this.obj.object3D.position.z = this.z; 
    }
  }