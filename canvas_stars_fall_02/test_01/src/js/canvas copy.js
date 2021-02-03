import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
const colors = [
  "#1D89CC", // bl
  "#145E8C", // bl dark
  "#092B40",
  "#0B334D",
  "#072233"
]


addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Stars = vel - velocity | fri - friction | gra - gravity
class Star {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.vel = { x: utils.randomIntFromRange(-1,1), y: 3 }
    this.fri = 0.8;
    this.gra = 1;
  }
}
Star.prototype.draw = function(){
  c.save()
  c.beginPath()
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
  c.fillStyle = this.color
  c.shadowColor = '#E3EAEF'
  c.shadowBlur = 20
  c.fill()
  c.closePath()
  c.restore()
}
Star.prototype.update = function(){
this.draw()
// When ball hits bot of screen
if (this.y + this.radius + this.vel.y > innerHeight) {
  this.shatter()

  this.vel.y = -this.vel.y * this.fri;
} else {
  this.vel.y += this.gra;
}

this.y += this.vel.y;
this.x += this.vel.x;
}

Star.prototype.shatter = function(){
  this.radius /=1.1;
  for( let i = 0; i < 8 ; i++ ) {
    miniStars.push( new MiniStar(this.x, this.y, 2) );
  }

    // delete stars[0];
    // console.log(miniStars);
    // if (this.radius < 10 ) delete this;

}

class MiniStar extends Star {
  constructor(x, y, radius, color) {
    super(x,y,radius,color);
    this.vel = { 
      x: utils.randomIntFromRange(-5,5), 
      y: utils.randomIntFromRange(-15,45),
    }
    this.fri = 0.7;
    this.gra = 1;
    this.ttl = 100
    this.opacity = 1
  }
}
MiniStar.prototype.draw = function(){
  c.save();
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = `rgba(240, 230, 230, ${this.opacity})`
    c.shadowColor = '#E3EAEF'
    c.shadowBlur = 20
    c.fill()
    c.closePath()
  c.restore();
}
MiniStar.prototype.update = function(){
  this.draw()
  // When ball hits bot of screen
  if (this.y + this.radius + this.vel.y > innerHeight) {
    this.vel.y = -this.vel.y * this.fri;
  } else {
    this.vel.y += this.gra;
  }
  this.x += this.vel.x;
  this.y += this.vel.y;
  this.ttl -= 1;
  this.opacity -= 1 / this.ttl;  // || this.opacity = this.ttl / 100;
}

function createMountainRange( mountainAmount, height, color ) {
  for (let i = 0; i < mountainAmount; i++ ) {
    const mountainWidth = canvas.width / mountainAmount;
    c.beginPath()
    c.moveTo( i * mountainWidth, canvas.width)
    c.lineTo( i * mountainWidth + mountainWidth + 200, canvas.height)
    c.lineTo( i * mountainWidth + mountainWidth / 2, canvas.height - height)
    c.lineTo( i * mountainWidth - 200, canvas.height) // end in moveTo position
    c.fillStyle = color;
    c.fill();
    c.closePath();
  }
}
// Implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, colors[0])
backgroundGradient.addColorStop(1, colors[1])
let stars, 
    miniStars,
    backgroundStars;
function init() {
  stars = [];
  miniStars = [];
  backgroundStars = [];

  for (let i = 0; i < 1; i++) {
    stars.push( new Star(canvas.width/2, 25, 30, "#fff" ) );
    // stars.push( new MiniStar(canvas.width/3, 30, 10, utils.randomColor(colors) ) );
  }

  for (let i = 0; i < 20; i++ ) {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    const rad = Math.random() * 3
    backgroundStars.push( new Star(x, y, rad, "white"))
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  // c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = backgroundGradient
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  // Sky stars
  backgroundStars.forEach( (backgroundStar, index) => {
    backgroundStar.draw();
  })

  createMountainRange(1, canvas.height * .8, colors[2])
  createMountainRange(2, canvas.height * .5, colors[3])
  createMountainRange(3, canvas.height * .3, colors[4])
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

  stars.forEach((star, index) => {
   star.update();
   if ( star.radius < 10 ) {
    stars.splice(index, 1);
   }
  })
  

  miniStars.forEach((miniStar, index) => {
    miniStar.update();
    if ( miniStar.ttl < 1 ) {
      miniStars.splice(index, 1);
    }
  })
}

init()
animate()
