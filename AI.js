function AI() {
    this.w = player.w;
    this.h = player.h;
    this.pos = createVector(width-this.w*3, height/2-this.h/2);
    this.acc = createVector(0, 0);
    this.speed = 1;
    this.maxSpeed = 15;

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    this.update = function() {    
            if(ball.pos.y<this.pos.y-this.h/2) {
                this.acc.y-=this.speed;
            } else {
                this.acc.y+=this.speed;
            }
       
            this.acc.y = constrain(this.acc.y, -this.maxSpeed, this.maxSpeed);

            this.pos.add(this.acc);
            this.pos.y = constrain(this.pos.y, 0, height-this.h);
   
        
    }
}