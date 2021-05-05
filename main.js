xn=0;
yn=0;

function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
can=createCanvas(400 ,400)
can.center()
v=createCapture(VIDEO)
v.hide()
posenet=ml5.poseNet(v,obj)
posenet.on('pose' , check)
}
function check(results){
if (results.length>0){
console.log(results)
xn=results[0].pose.nose.x-140;
yn=results[0].pose.nose.y-35;

}
}
function obj(){
console.log("model loaded!")
}
function draw(){
image(v,0,0,400,400)
image(img,xn,yn,80,35)
}
function snap(){
save('nn.png')
}