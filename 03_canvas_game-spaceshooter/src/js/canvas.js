// console.log(gsap)
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const scoreEl = document.querySelector('#scoreEl')
const startGameBtn = document.querySelector('#startGameBtn');
const modelEl = document.querySelector('#modelEl');
const bigScoreEl = document.querySelector('#bigScoreEl');


canvas.width = innerWidth
canvas.height= innerHeight



class Player {
    constructor(x, y, radius, color) {
        this.x = x,
        this.y = y,
        this.radius = radius,
        this.color  = color
    }

    draw() {
        // console.log('drawn');
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x, 
        this.y = y,
        this.radius = radius,
        this.color = color,
        this.velocity = velocity
    }

    draw() {
        // console.log('drawn');
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    update() {
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
        this.draw()
    }

}

class Enemy {
  constructor(x, y, radius, color, velocity) {
      this.x = x, 
      this.y = y,
      this.radius = radius,
      this.color = color,
      this.velocity = velocity
  }

  draw() {
    // console.log('drawn');
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
      this.x = this.x + this.velocity.x;
      this.y = this.y + this.velocity.y;
      this.draw()
  }
}
const friction = 0.99;
class Particle {
  constructor(x, y, radius, color, velocity) {
      this.x = x, 
      this.y = y,
      this.radius = radius,
      this.color = color,
      this.velocity = velocity
      this.aplha = 1;
  }

  draw() {
    c.save();
    // console.log('drawn')
    c.globalAlpha = 0.1;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.restore();
  }

  update() {
    this.draw()
    this.velocity.x *= friction
    this.velocity.y *= friction
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
    this.aplha -= 0.01;  
  }
}

const cx = canvas.width / 2,
      cy = canvas.height / 2;

let player = new Player(cx,cy, 20, 'white');
let projectiles = [];
let enemies = []
let particles = [];
      

function init() {
  player = new Player(cx,cy, 20, 'white');
  projectiles = [];
  enemies = []
  particles = [];
  score = 0;
  scoreEl.innerHTML = score;
  bigScoreEl.innerHTML = score;  
}


function spawnEnemies() {
  setInterval(() => {
    const radius = Math.random() * ( 30 - 6 ) + 6
    const extend = 10
    let x, y;
    if ( Math.random() < .5 ) {
      x = Math.random() < .5 ? 0 - radius :  canvas.width + radius
      y = Math.random() * canvas.height
    } else {
      x = Math.random() * canvas.width
      y = Math.random() < .5 ? 0 - radius : canvas.height + radius
    }

    const color = `hsl(${Math.random() * 360}, 50%, 50%)`

              
    const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
    const veloc = {
      x: Math.cos(angle),
      y: Math.sin(angle)
    }
    var enemy = new Enemy(x, y, radius, color, veloc)
    enemies.push(enemy)
    console.log(enemy)
  }, 2000)
}

// console.log(player)

const speed = 4,
      fireRate = .4
let canShoot = true;

window.addEventListener('click', (e) => {
  if (canShoot) {
      const angle = Math.atan2(e.clientY - canvas.height/2, e.clientX - canvas.width/2 );

      const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      }

      console.log(velocity)
      projectiles.push( new Projectile(
        canvas.width / 2,  canvas.height / 2,  4,  'white',  velocity
      )) 
      canShoot = false
      console.log('shoot stop!!!')

      setTimeout(() => {
        canShoot = true;
        console.log('can shoot')
      }, 1000 * fireRate)
  }
})


startGameBtn.addEventListener('click', function() {
  init();
  animate();
  spawnEnemies();
  modelEl.style.display = 'none';
})

let animationId;
let score = 0;

function animate() {
    animationId = requestAnimationFrame(animate);
    c.fillStyle = `rgba(0,0,0, 0.1)`
    // c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();

    projectiles.forEach( (projectile, index) => {
      projectile.update();
      // remove from edges of the screen
      if( projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > canvas.width ||
        projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > canvas.height ) {
        setTimeout( () => {
          projectiles.splice(index, 1);
        }, 0);
        console.log("projectile", index, "removed")
      }
    })

    
    enemies.forEach( (enemy, index) => {
      enemy.update();
      const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
      if ( dist - enemy.radius - player.radius < 1 ) {
        // console.log('end game')
        cancelAnimationFrame(animationId);
        modelEl.style.display = 'flex';
        bigScoreEl.innerHTML = score;
      }

      particles.forEach( (particle, index) => {
        if( particle.aplha <= 0 ) {
          particles.splice(index, 1);
        }
        particle.update();
      })

      projectiles.forEach( (projectile, projectileIndex) => {
        const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
        
        // when projectile touch enemy
        if ( dist - enemy.radius - projectile.radius < 1 ) {

          // Create explosion
          for( let i = 0; i < enemy.radius * 2; i++ ) {
            particles.push( 
              new Particle(
                projectile.x, projectile.y, 
                Math.random() * 2, 
                enemy.color, 
                { x: Math.random() - 0.5 * (Math.random() * 6)  ,
                y: Math.random() - 0.5  * (Math.random() * 6) } 
              )
            )
          }

          if ( enemy.radius - 10 > 5 ) {

            //increase score
              score += 100;
              scoreEl.innerHTML = score;
              
            // enemy.radius -= 4
            gsap.to(enemy, {
              radius: enemy.radius - 10
            })
            projectiles.splice(projectileIndex, 1);
          } else {
            score += 220;
            scoreEl.innerHTML = score;
            setTimeout( () => {
              // console.log("remove enemy")
              enemies.splice(index, 1);
              projectiles.splice(projectileIndex, 1);
            }, 0)
          }
          
          
        }
      })

    })


}
