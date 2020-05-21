var blink=5;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(0,0,0);
  fill (255,250,0);
  stroke(255,0,0);
  strokeWeight(3);
  ellipse(200,150,40,40);
  ellipse(280,150,40,blink);
  //blink=blink+5;
if(blink>50){
  blink=-10;
} else{
	blink=blink+1;
}
  fill(0,0,0);
  ellipse(200,150,10,10);
  ellipse(280,150,10,10);
  noFill();
  arc(240, 250, 110, 50, 0, PI / 1.0);
        
}