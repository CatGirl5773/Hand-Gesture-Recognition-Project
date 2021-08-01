function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 400);

    canvas = createCanvas(550, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#fec8c1');
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}