import React from "react";
import Sketch from "react-p5";
 
const MainBackground = (props) => {
    let balls = [];

    let threshold = 30;
    let accChangeX = 0;
    let accChangeY = 0;
    let accChangeT = 0;
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

        for (let i = 0; i < 20; i++) {
            balls.push(new Ball());
          }
        
          p5.frameRate(60);

          function Ball() {
            this.x = p5.random(p5.width);
            this.y = p5.random(p5.height);
            this.diameter = p5.random(10, 30);
            this.xspeed = p5.random(-2, 2);
            this.yspeed = p5.random(-2, 2);
            this.oxspeed = this.xspeed;
            this.oyspeed = this.yspeed;
            this.direction = 0.7;
          
            this.move = function() {
              this.x += this.xspeed * this.direction;
              this.y += this.yspeed * this.direction;
            };
          
            // Bounce when touch the edge of the canvas
            this.turn = function() {
              if (this.x < 0) {
                this.x = 0;
                this.direction = -this.direction;
              } else if (this.y < 0) {
                this.y = 0;
                this.direction = -this.direction;
              } else if (this.x > p5.width - 20) {
                this.x = p5.width - 20;
                this.direction = -this.direction;
              } else if (this.y > p5.height - 20) {
                this.y = p5.height - 20;
                this.direction = -this.direction;
              }
            };
          
            // Add to xspeed and yspeed based on
            // the change in accelerationX value
            this.shake = function() {
              this.xspeed += p5.random(5, accChangeX / 3);
              this.yspeed += p5.random(5, accChangeX / 3);
            };
          
            // Gradually slows down
            this.stopShake = function() {
              if (this.xspeed > this.oxspeed) {
                this.xspeed -= 0.6;
              } else {
                this.xspeed = this.oxspeed;
              }
              if (this.yspeed > this.oyspeed) {
                this.yspeed -= 0.6;
              } else {
                this.yspeed = this.oyspeed;
              }
            };
          
            this.display = function() {
                p5.ellipse(this.x, this.y, this.diameter, this.diameter);
            };
          }
    };
 
    const draw = (p5) => {
        let color1 = p5.color(236, 48, 59);
        let color2 = p5.color(255, 153, 102);

        setGradient(0, 0, p5.windowWidth, p5.windowHeight, color1, color2, "Y");
        for (let i = 0; i < balls.length; i++) {
            balls[i].move();
            balls[i].display();
        }

        checkForShake();

        function setGradient(x, y, w, h, c1, c2, axis) {
            p5.noFill();
            if (axis === "Y") {
              // Top to bottom gradient
              for (let i = y; i <= y + h; i++) {
                let inter = p5.map(i, y, y + h, 0, 1);
                let c = p5.lerpColor(c1, c2, inter);
                p5.stroke(c);
                p5.line(x, i, x + w, i);
              }
            } else if (axis === "X") {
              // Left to right gradient
              for (let j = x; j <= x + w; j++) {
                let inter2 = p5.map(j, x, x + w, 0, 1);
                let d = p5.lerpColor(c1, c2, inter2);
                p5.stroke(d);
                p5.line(j, y, j, y + h);
              }
            }
          }
        
          function checkForShake() {
            // Calculate total change in accelerationX and accelerationY
          
            accChangeX = p5.abs(p5.accelerationX - p5.pAccelerationX);
          
            accChangeY = p5.abs(p5.accelerationY - p5.pAccelerationY);
            accChangeT = accChangeX + accChangeY;
            // If shake
            if (accChangeT >= threshold) {
              for (let i = 0; i < balls.length; i++) {
                balls[i].shake();
                balls[i].turn();
              }
            }
            // If not shake
            else {
              for (let i = 0; i < balls.length; i++) {
                balls[i].stopShake();
                balls[i].turn();
                balls[i].move();
              }
            }
          }
    };
 
    return <Sketch setup={setup} draw={draw} />;
};
 
export default MainBackground;

//funcs

