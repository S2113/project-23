class boxy
{

constructor(x,y,h,a)
{
this.height=h;
this.width=25;
this.body=Bodies.rectangle(x,y,25,h,{isStatic:true});
Body.setAngle(this.body,a);
World.add(world,this.body);
}

display()

{
    push ();
    rectMode(CENTER);
    fill("red");
    translate (this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    rect(0,0,this.width,this.height);
    pop ();
    
    
    
}

}