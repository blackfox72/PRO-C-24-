class paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':1,
          density:1.2,
          
          
          
          
      }
      this.body = Bodies.circle(x, y,r/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			fill("green")
			ellipse(0,0,this.r, this.r);
			pop()
    }
  };
  