function preload(){
    
}
let video;
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
  
    video.size(320, 240);
   // video.hide();
    //capture.hide();
    video.hide();

}
function draw(){
    background(320);
   // image(video, 0, 0, 320, 240);
  
    image(video, 50, 50, 550, 350);
    fill(218,165,32);
    stroke(218,165,32);
    rect(580, 40, 20, 400);
    circle(50, 50, 80);
    circle(50, 410, 80);
    circle(590, 410, 80);
    rect(40, 40, 20, 400);
    circle(590, 50, 80);

rect(90, 40, 460, 20);
rect(90, 400, 460, 20);

fill(218,165,32);
    stroke(218,165,32);
  
}