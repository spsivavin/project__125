noseX=0;
noseY=0;


function preload()  {
    moustache = loadImage('https://i.postimg.cc/4NpJ1nhS/download-1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function ModelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose Y = " + noseY);
                

    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX-15, noseY-15, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}