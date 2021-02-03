console.profile("Core Html5 Aimations");


const canvas = document.querySelector('canvas'),
      c  = canvas.getContext("2d"),
      cw = canvas.width = innerWidth,
      ch = canvas.height = innerHeight;

const FONT_HEIGHT           = 15,
      MARGIN                = 35,
      HAND_TRUNCATION       = cw / 25,
      HOUR_HAND_TRUNCATION  = cw / 10,
      NUMERAL_SPACING       = 20,
      RADIUS                = cw/4 - MARGIN,
      HAND_RADIUS           = RADIUS + NUMERAL_SPACING;

// Functions ........................................

function drawCircle() {
    c.beginPath();
    c.arc(cw/2, ch/2, RADIUS, 0 , Math.PI*2, true);
    c.stroke();
}

function drawCenter() {
    c.beginPath()
    c.arc(cw/2,ch/2, 3, 0, Math.PI*2, true);
    c.fill();
}

function drawNumerals() {
    var numerals = [1,2,3,4,5,6,7,8,9,10,11,12],
        angle = 0,
        numeralWidth = 0;

    numerals.forEach((numeral, index) => {
        angle = Math.PI/6 * (numeral - 3)
        numeralWidth = c.measureText(numeral).width;
        // console.log(index, angle, numeralWidth)
        var x = cw/2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth/2
        var y = ch/2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT/3
        // console.info("x:", x,"cos:", Math.cos(angle), "y", y, "sin:", Math.sin(angle))
        c.fillText(numeral, x, y );
    })
}

function drawHand(location, isHour) {
    var angle = (Math.PI*2) * (location/60) - Math.PI/2,
        handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
                            : RADIUS - HAND_TRUNCATION;

    c.moveTo( cw/2, ch/2);
    c.lineTo( cw/2 + Math.cos(angle) * handRadius, ch/2 + Math.sin(angle) * handRadius);
    c.stroke();
}
function drawHands() {
    var date = new Date();
        hour = date.getHours();

    hour = hour > 12 ? hour - 12 : hour;

    drawHand(hour*5 + (date.getMinutes()/60)*5, true, 0.5);
drawHand(date.getMinutes(), false, 0.5);
drawHand(date.getSeconds(), false, 0.2);
}

c.font = FONT_HEIGHT + 'px Arial';

function drawClock() {
    requestAnimationFrame(drawClock);
    c.clearRect(0,0, cw,ch);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
}



drawClock();











console.profileEnd();