class Snowman{
  constructor(x,z){
      this.x = x;
      this.z = z;
      /* Challenge
        Add variables in order to animate the snowman rotating
      */
    this.r = 0;
    this.dr = 1;
      this.obj = document.createElement("a-entity");
      /* Challenge 
         Clone the snowman from the template in the HTML
      */

      this.obj.append(snowmanTemplate.cloneNode(true));
      
      /* Challenge
         An attribute has been identified for the raycaster in the cursor. 
         Add the appropriate attribute in order to interact with this object.
      */
      //this.obj.setAttribute("clickable", "");
      /* Challenge 
         Make the snowman spin when the user clicks on the snowman.
         Hint: Don't forget to adjust spin() to incorporate the "flag"
      */

      this.obj.addEventListener("click", ()=>{
        this.click = true;
      });
    
      this.obj.setAttribute("position",{x:this.x,y:0,z:this.z});
      scene.append(this.obj);
  }
  spin(){
    
      /* Challenge
         Add the necessary code to rotating the snowman when the "flag" is set
      */
    if(this.click){
      this.r += this.dr;
      this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
    }
  }
}