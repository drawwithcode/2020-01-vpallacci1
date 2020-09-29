function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
    background("black");
    angleMode(DEGREES);
    frameRate(30);
}

function draw() {
  // put drawing code here

//TESTO
  push()
     textSize(20);
     text("MOVE YOUR MOUSE", width/1.2, height/15);
  pop()

//1° ANIMAZIONE
if (frameCount <= 360) {

    stroke (lerpColor(color('white'), color('magenta'),frameCount/1080 ));

  push()
    noFill();
    translate(width/2, height/2);
    rotate(frameCount);
    let x = 0;
    let y = mouseY/10;
    circle(x, height/3.5,2+y)
  pop()

}

//2° ANIMAZIONE
if (frameCount >= 360 & frameCount <=720) {

    stroke (lerpColor(color('white'), color('magenta'),frameCount/1080 ));

  push()
    noFill();
    translate(width/2, height/2);
    rotate(frameCount);
    let x = 0;
    let y = mouseY/10;
    circle(x, height/2.5,4+y);
  pop()

}

//3° ANIMAZIONE
if (frameCount >= 720 & frameCount <=1080) {

    stroke (lerpColor(color('white'), color('magenta'),frameCount/1080 ));

  push()
    noFill();
    translate(width/2, height/2);
    rotate(frameCount);
    let x = 0;
    let y = mouseY/10;
    circle(x, height/2,4+y);
  pop()

}

//CERCHIO CENTRALE
  push()
    strokeWeight(0.2)
    translate(width/2, height/2);
    line(width/20,0, (cos (frameCount*6)*width/20), (sin (frameCount*6)*width/20 ));
    line(width/-20,0, (cos (frameCount*6)*width/-20), (sin (frameCount*6)*width/-20 ));
  pop()

//SFONDO

  push()
    strokeWeight(0.01)
    translate(width/2, height/2);
    line(width/2,0, (cos (frameCount*6)*width/2), (sin (frameCount*6)*width/2 ));
    line(width/-2,0, (cos (frameCount*6)*width/-2), (sin (frameCount*6)*width/-2 ));
  pop()

   }
