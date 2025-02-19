
class Tower {
    constructor(x, y, width, height) {
      var options = {
      isStatic: true
//set the static body(challenge 2)
      
      };
      this.image = loadImage("assets/tower.png")
        //Load the image of the tower(challenge 5)
    this.width = width;
    this.height = height;
      //write the instruction to create a rectangular tower body(challenge1)
      //add the option inside the rectangular body(challenge 2)
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      //Add this object to the World(challenge 2)
      World.add(world, this.body)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height)
            //change the rect as image(challenge 5)

//display the rect function (challenge 3)
  pop();
  }
}
