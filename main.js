function preload(){

}
function setup(){
    canvas=createCanvas(640,450);
    canvas.position(300,200);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,230,150,220,200);
    stroke(125,250,100);
    fill(50,150,200);
    circle(50,50,100);
    circle(50,430,100);
    circle(590,50,100);
    circle(590,430,100);
    stroke(243,98,160);
    fill(150,250,100);
    rect(20,90,60,300);
    rect(560,90,60,300);
    rect(100,30,440,50);
    rect(100,400,440,50);
    tint(tint_color);
}
function take_snapshot(){
    save('User.png');
}
function apply(){
    tint_color=document.getElementById("filter").value;
}