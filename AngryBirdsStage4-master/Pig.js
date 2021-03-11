class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Transparency=255
  }
  display(){
   console.log (this.body.speed)
  if(this.body.speed>3){
    push()
    World .remove(world,this.body)
    this.Tranparency-=5
    tint (255,this.Transparency)
    image( this.image,this.body.position.x,this.body.position.y,50,50)
    pop() 

  
  }else{super.display()}
  
  }
};