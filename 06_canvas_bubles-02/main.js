document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height= window.innerHeight;

 

    let particleArray = []

    const colors = [
        'white',
        'rgba(255,111,11,.1)',
        'rgba(173,255,255,.1)',
        'rgba(211,211,211,.1)'
    ]

    const   maxSize = 40,
            minSize = 0,
            mouseRadius = 60;

    const circleCount = 100;

    let mouse = {
        x: null,
        y: null
    }

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log( mouse, mouse)
    })

    function Particle( x, y, directionX, directionY, radius, color ) {
        this.x = x; this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.radius = radius; this.color = color;
    }

    Particle.prototype.draw = function() {
        // debugger
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.stroke(); 
    }

    Particle.prototype.update = function() {
        if( this.x + this.radius * 2 > canvas.width || this.x - this.radius * 2 < 0 ) {
            this.directionX = -this.directionX
        }
        if( this.y + this.radius * 2 > canvas.height || this.y - this.radius * 2 < 0 ) {
            this.directionY = -this.directionY
        }
        this.x += this.directionX;
        this.y += this.directionY;

        if ( mouse.x - this.x < mouseRadius
            && mouse.x - this.x > -mouseRadius
            && mouse.y - this.y < mouseRadius
            && mouse.y - this.y > -mouseRadius) {
            if ( this.radius < maxSize ) {
                this.radius += 3;
                this.x -= 1.5;
            }
        } else if ( this.radius > minSize ) {
            this.radius -= 1;
        } 
        if ( this.radius < 0 ) {
            this.radius = 0;
        }


        this.draw();
    }


    function init() {
        particleArray = [];

        for ( let i = 0; i < circleCount; i++ ) {
            let radius = (Math.random() * 20);
            let x = (Math.random() * (( innerWidth  - radius * 2 ) - (radius * 2)) + radius * 2);
            let y = (Math.random() * (( innerHeight - radius * 2 ) - (radius * 2)) + radius * 2);
            let directionX = (Math.random() * .2) - .1;
            let directionY = (Math.random() * .2) - .1;
            let color = colors[Math.floor(Math.random() * colors.length)]
            
            particleArray.push( new Particle(x, y, directionX, directionY, radius, color))
        }
        console.log(particleArray)

    }
    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        particleArray.forEach( item => item.update())
    }

    init();
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    })

    setInterval(() => {
        mouse.x=undefined;
        mouse.y=undefined;
    }, 1000)


})