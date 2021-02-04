class ground{
    constructor(x,y,width,height){
        var options= {
            'isStatic': true
        }
    this.body=Bodies.rectangle(x,y,this.width,this.height,options)
    this.width = width;
    this.height = height;

    World.add(world, this.body)
    }
    display()
{
    var pos = this.body.position;
    push()
    rectMode(CENTER)
    strokeWeight(4)
    stroke("blue")
    fill("orange");
    rect(pos.x,pos.y,this.width,this.height)
    pop();
}
};