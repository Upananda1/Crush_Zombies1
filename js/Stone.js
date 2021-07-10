class Stone{
    constructor(x, y, width, height){
        var OP = {
         restitution: 0.8
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, OP);
        World.add(world, this.body)
    }

    show(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("brown");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
     }
}