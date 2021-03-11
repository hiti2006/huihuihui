class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    this.ca1=loadImage("sprites/sling1.png")
    this.ca2=loadImage("sprites/sling2.png")
    this.ca3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#45200C")
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+35);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+35)
            image (this.ca3,pointA.x-20,pointA.y-5,10,20)
        }
        image (this.ca1,200,120,50,100)
        image (this.ca2,170,120,50,60)
    }
}