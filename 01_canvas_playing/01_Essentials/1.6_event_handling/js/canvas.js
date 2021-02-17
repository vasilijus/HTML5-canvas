console.profile("Core Html5 Aimations");


var canvas = document.getElementById('canvas'),
    readout= document.getElementById('readout'),
    ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height,
    sprSheet = new Image();

// Functions................................................

function updateReadout(x,y) {
    readout.innerText = `( ${x}, ${y})`
}
function drawHorizontalLine(y) {
    ctx.moveTo(0, y);
    ctx.lineTo(cw, y);
    ctx.stroke();
}
function drawGuideLines(x,y) {
    var top = 0, left = 0, right = 0, down = 0;
    ctx.clearRect(0,0, cw,ch);

    canvas.strokeStyle = "black"
    canvas.lineWidth = 0.5;
    drawHorizontalLine(y);
}
// Event Handlers...........................................
// canvas.addEventListener("mousemove")
canvas.addEventListener('mousemove', (e) => {
    console.log(e);

    updateReadout(e.x, e.y);
    drawGuideLines(e.x, e.y);
})


console.profileEnd();