class Box{
    constructor(x, y, width, height){
        var options = {
            restitution: 1.0,
            friction: 2.0,
            density: 0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        //shortcut/ name space 
        var pos = this.body.position
        rectMode(CENTER);
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle);
        rect(0, 0, this.width, this.height);
        pop ();
    }




}