class Base{
    constructor(x, y, width, height){
        var OP = {
            isStatic:true
        }
       
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, OP);
      World.add(world, this.body);
    }

 display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
 }

}