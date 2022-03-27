var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");

var mouse = {
x: undefined,
y: undefined
}
var minRadius = 3, maxRadius = 60;


var colorArray = ['#4753ED', '#4A85F7', '#4FA6E0', '#4AE0F7', '#47EDD7'];

window.addEventListener('resize', () => {
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

init();
})
window.addEventListener('mousemove', event => {
mouse.x = event.x; 
mouse.y = event.y;
// console.log(mouse,'moveing')
})


class Circle {

    constructor(x,y,dx,dy,rad) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = rad;
        this.minRadius = this.radius;
        this.stroke = '';
        this.color = colorArray[(Math.floor(Math.random() * colorArray.length))]
    }

    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI *2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0 ) { 
            this.dx = -this.dx; 
        }
        if( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactity
        if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y > -50 && mouse.y - this.y > -50 ) {
                if ( this.radius < maxRadius ) {
                    this.radius += 1;

                }
        } else if (this.radius > this.minRadius ){
            this.radius -= 1;
        }

        this.draw();
    }

}



var circleArray = [];

function init() {

circleArray = [];

for( var i = 0;i < 50; i++ ) {
    var x = Math.random() * (innerWidth - radius * 2) + radius, 
        y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5), 
        dy = (Math.random() - 0.5);
    var radius = Math.random() * 20;

    circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    c.strokeStyle = 'blue';
    for ( var i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }
}
animate();

}

init()

