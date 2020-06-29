class Box {
    constructor() {
        var options = {
            'isStatic' : true,
            'friction' : 1.0
        }
        this.bottom = Bodies.rectangle(600,630,200,20,options);
        this.height = height;
        this.width = width;
        
        World.add(world,this.bottom);

        this.right = Bodies.rectangle(this.bottom.position.x + 90,this.bottom.position.y - 60,20,100,options);
        this.height = height;
        this.width = width;
        
        World.add(world,this.right);

        this.left = Bodies.rectangle(this.bottom.position.x - 90,this.bottom.position.y - 60,20,100,options);
        this.height = height;
        this.width = width;
        
        World.add(world,this.left);
    }
    display() {
        var pos = this.bottom.position;
        rectMode(CENTER);
        
        fill("white");
        rect(pos.x,pos.y,200,20);

        var pos = this.right.position;
        rectMode(CENTER);
        
        fill("white");
        rect(pos.x,pos.y,20,100);

        var pos = this.left.position;
        rectMode(CENTER);
        
        fill("white");
        rect(pos.x,pos.y,20,100);
    }
}

