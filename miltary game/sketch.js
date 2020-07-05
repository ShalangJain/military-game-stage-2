var canvas
var backgroundimage
var gameState = "intro"
var goodmissileman, goodrifle, goodsniper, goodtank
var badmissileman, badrifle, badsniper, badtank
var badbullet, badmissile, cannonball, goodbullet, goodmissile
var halfsmileleader, mouthopenleader,notalkleader, smileleader
var backdropimage
var video

function preload (){
  goodmissilemanimg = loadImage ("good army/goodmissileman.png")
  goodrifleimg = loadImage ("good army/goodrifle.png")  
  goodsniperimg = loadImage("good army/goodsniper.png")
  goodtankimg = loadImage ("good army/goodtank.png")

  badmissilemanimg = loadImage ("enemy army/badmissileman.png")
  badrifleimg = loadImage("enemy army/badrifle.png")
  badsniperimg = loadImage("enemy army/badsniper.png")
  badtankerimg = loadImage("enemy army/badtanker.png")

  goodbulletimg = loadImage("ammunation/goodbullet.png")
  goodmissileimg = loadImage("ammunation/goodmissile.png")
  cannonballimg = loadImage("ammunation/cannonball.png")
  badbulletimg = loadImage("ammunation/badbullet.png")
  badmissile = loadImage ("ammunation/badmissile.png")

  leadertalking = loadAnimation ("leader/notalkleader.png","leader/notalkleader.png", "leader/mouthopenleader.png", "leader/halfsmileleader.png",)

  backdropimage = loadImage("war image day.png")
 

}

 

function setup(){
  //if(gameState == 0){
  //  noCanvas();
 // }
  canvas = createCanvas(displayWidth - 100, displayHeight-110);

  //  video = createVideo("video.mp4" )

}
function draw(){
   background(backdropimage)
   drawSprites()
   if (gameState === "intro"){
 
   intro()
   
}

}
function land(){
    

}
function keyPressed(){
  if (keyCode === 32){
    gameState = "instructions"
  }
}
//function createVideo() {
 // vid.loop();
  //vid.volume(0);

function intro(){
  //var leader = createSprite(1300,750)
  //leader.addImage("leader",leadertalking)
  animation(leadertalking, 1200,680)
 // console.log(leader)
  
}