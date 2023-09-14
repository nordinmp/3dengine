cS = -50; //Afstand fra camera til skærm

function setup() 
{
  createCanvas(400, 400);
  
  sliderZ = createSlider(-100, 100, 0);
  sliderZ.position(10, 10);
  
  sliderX = createSlider(-200, 200, 0);
  sliderX.position(150, 10);
  
  sliderY = createSlider(-200, 200, 0);
  sliderY.position(300, 10);
  
  sliderSkalarX = createSlider(1, 10, 1, 0.1);
  sliderSkalarX.position(10, 40);
  
  sliderSkalarY = createSlider(1, 10, 1, 0.1);
  sliderSkalarY.position(150, 40);
  
  sliderSkalarZ = createSlider(1, 10, 1,0.1);
  sliderSkalarZ.position(300, 40);
  
  sliderSkalarZ = createSlider(0, 360, 1);
  sliderSkalarZ.position(300, 70);
}

function draw() 
{
  background(220);
  
  z = sliderZ.value();
  x = sliderX.value();
  y = sliderY.value();
  skalarX = sliderSkalarX.value();
  skalarY = sliderSkalarY.value();
  skalarZ = sliderSkalarZ.value();
  
  strokeWeight(10);
  //TopHøjre
  dot1 = dotMaker(-20 * skalarX + x,-20 * skalarY + y,-150 * skalarZ + z);
  //TopVenstre
  dot2 = dotMaker(20 * skalarX + x,20 * skalarY + y,-150 * skalarZ + z);
  
  //BundHøjre
  dot3 = dotMaker(20 * skalarX + x,-20 * skalarY + y,-150 * skalarZ + z);
  //BundVenstre
  dot4 = dotMaker(-20 * skalarX + x,20 * skalarY + y,-150 * skalarZ + z);
  
  //TopHøjre
  dot5 = dotMaker(-20 * skalarX + x,-20 * skalarY + y,-85 * skalarZ + z);
  //TopVenstre
  dot6 = dotMaker(20 * skalarX + x,20 * skalarY + y,-85 * skalarZ + z);
  
  //BundHøjre
  dot7 = dotMaker(20 * skalarX + x,-20 * skalarY + y,-85 * skalarZ + z);
  
  dot8 = dotMaker(-20 * skalarX + x,20 * skalarY + y,-85 * skalarZ + z);
  
  strokeWeight(2);
  //Top
  lineMaker(dot1,dot3);
  //Venstre
  lineMaker(dot1,dot4);
  //Bund
  lineMaker(dot4,dot2);
  //Højre  
  lineMaker(dot3,dot2);

  //Top
  lineMaker(dot5,dot7);
  //Venstre
  lineMaker(dot5,dot8);
  //Bund
  lineMaker(dot8,dot6);
  //Højre  
  lineMaker(dot7,dot6);
  
  
  //CONNECTERS
  //Top
  lineMaker(dot1,dot5);
  //Venstre
  lineMaker(dot7,dot3);
  //Bund
  lineMaker(dot2,dot6);
  //Højre  
  lineMaker(dot8,dot4);
  
  
}

function dotMaker(pX, pY, pZ) 
{
  
  
  x1 = ((pX*cS)/pZ)+200;
  y1 = ((pY*cS)/pZ)+200;
  
  pZ = pZ;
  point(x1,y1);
  return [x1, y1];
}

function lineMaker(x,y) 
{
  line(x[0],x[1],y[0],y[1]);
}