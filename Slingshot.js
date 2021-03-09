class Slingshot{
    constructor(bodyA1,pointB1){
        var options = {
            bodyA:bodyA1,
            pointB:pointB1,
            stiffness:0.04,
            length:50
        }
        this.sling1 = loadImage('sprites/sling1.png')
        this.sling2 = loadImage('sprites/sling2.png')
        this.sling3 = loadImage('sprites/sling3.png')
        this.pointB = pointB1
        this.Sling = Constraint.create(options)
        World.add(world,this.Sling)
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position
            var pointB = this.pointB
            push()
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(4)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y)
                image(this.sling3,pointA.x-30,pointA.y-10,15,30)    
            }else{
                strokeWeight(3)
                line(pointA.x+20,pointA.y,pointB.x+10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y)
                image(this.sling3,pointA.x+30,pointA.y-10,15,30)
            }
        pop()
        }
    }
    fly(){
        this.Sling.bodyA = null;
    }

    attach(body){
        this.Sling.bodyA=body
    }
}