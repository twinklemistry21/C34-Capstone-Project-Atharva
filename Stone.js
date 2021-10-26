class Stone
{
    constructor(x,y)
    {
        var options = {
            restitution: 0.08,
            isStatic: false,
            density: 1.2
        }
        
        this.image = loadImage("stone-removebg-preview.png");
        this.x = x;
        this.y = y;
        this.r = 50;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}