let cor;
let circlex;// horizontal
let circley;// vertical

function setup() {
  createCanvas(700, 500);// width x height
  background("rgb(246,63,95)");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circlex = [0, 0, 0, 0,];
   circley = [random (height), random (height), random (height), random (height)];
}

//circlex = 0, 0, 0, 0;
//circley = 125, 250,375,490
function draw() {
  fill(cor);
// console.log(circulox.lenght);
  for(let dedo in circlex) {
    console.log(dedo);
      circle(circlex [dedo],circley[dedo] , 30);
    circlex[dedo]+= random(0, 3)
  circley[dedo]+= random(-3, 3)
   if(circlex[dedo]>= width) {
        circlex[dedo] = 0;
     circley[dedo] = random(height)
    }
  }
  circle(circlex [0],circley[0] , 30);
   
  
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0,255));
  }
}