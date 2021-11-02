function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent");
    rectMode(CENTER);
}
  
function draw() {
    background(255);
    stroke(map(mouseX, 0, width, 100, 255), 0, map(mouseY, 0, width, 0, 255));
    strokeWeight(3);
    line(0, 0, mouseX, mouseY);
    line(width, 0, mouseX, mouseY);
    line(width, height, mouseX, mouseY);
    line(0, height, mouseX, mouseY);  
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}