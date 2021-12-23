img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('Baby.jpg');
}

function setup() {
    canvas = createCanvas(450, 420);
    canvas.position(750, 200);
}

function draw() {

    if(status !="") {
        for (i = 0; i <objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#0818A8");
            percent = floor(objects[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#0818A8");
            rect(object[i].x, object[i].y, objects[i].width, objects[i].height);
        }
    }

    image(img, 0, 0, 450, 420);
    fill("#0818A8");
    text("Baby", 105, 65);
    noFill()
    stroke("#0818A8");
    rect(90, 50, 250, 300, 10);

}