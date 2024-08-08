class Cannon {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannon_image = loadImage("assets/CANON.png");
        this.cannon_base = loadImage("assets/cannon_base.png");
    }
    display() {
        if (KeyIsDown(RIGHT_ARROW) && this.angle < 0.1) {
            this.angle += 0.01;
        }
        if (KeyIsDown(LEFT_ARROW) && this.angle > -1.45) {
            this.angle -= 0.01;
        }

        
    }
}