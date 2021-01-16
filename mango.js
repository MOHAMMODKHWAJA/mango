class mango extends Baseclass{
    constructor(x,y){
       super(x,y,50,50,(options)); 
       this.image= loadImage("Plucking mangoes/mango.png");
      // this.image.scale=2.0;
     
    }
    display() {
        var options={
            isStatic:false,
            restitution:5,
            friction:3,
        }
        
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
      }
    }