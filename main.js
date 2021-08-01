leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 400);

    canvas = createCanvas(550, 550);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#fec8c1');
    fill('#FFFFFF');
    textSize(difference);
    text("Esther", 10, 325);
    document.getElementById("display_font_size").innerHTML = difference + "px";
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", Difference = " + difference);
    }
}
