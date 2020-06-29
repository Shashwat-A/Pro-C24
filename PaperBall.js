class PaperBall {
    constructor() {
        var options= {
            'isStatic' : false,
            'friction' : 0.5,
            'density' : 1.2,
            'restitution' : 0.3
        }

        this.body = Bodies.circle(50,300,20,options);
        World.add(world,this.body)
    }
    display() {
        ellipseMode(RADIUS);

        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,20,20);
    }
}