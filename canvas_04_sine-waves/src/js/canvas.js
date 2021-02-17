import * as dat from 'dat.gui';

const gui = new dat.GUI();
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01
}
const strokeColor = {
  h: 200, s:50, l:50
}
const backgroundColor = {
  r:0, g:0, b:0, a:0.1
}
const wafeFolder = gui.addFolder('Wave');
  gui.add(wave, 'y', 0, canvas.height)  // 336
  gui.add(wave, 'length', -0.01, 0.01)  // 0.002
  gui.add(wave, 'amplitude', -300, 300) // 100
  gui.add(wave, 'frequency', -0.01, 1)
wafeFolder.open();
const strokeFolder = gui.addFolder('Stroke');
  gui.add(strokeColor, 'h', 0, 360, 1)  // 336
  gui.add(strokeColor, 's', 0, 100)  // 0.002
  gui.add(strokeColor, 'l', 0, 100) // 100
strokeFolder.open();
const backgroundFolder = gui.addFolder('Background');
  gui.add(backgroundColor, 'r', 0,255)  
  gui.add(backgroundColor, 'g', 0,255)  
  gui.add(backgroundColor, 'b', 0,255)  
  gui.add(backgroundColor, 'a', 0, 1, 0.1)  
  backgroundFolder.open();

let increment = wave.frequency;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`
  c.fillRect(0,0 , canvas.width, canvas.height);

  // c.clearRect(0, 0, canvas.width, canvas.height)

  c.beginPath()

  c.moveTo(0, canvas.height/2)

  for (let i = 0; i < canvas.width; i++) {


    c.lineTo(i , 
              wave.y + 
              Math.sin(i * wave.length + increment) * 
              wave.amplitude 

              // / i * 100
              * Math.sin(increment) 
    );
    
    // Fill background bellow line
    // c.lineTo(i , canvas.height);

  }

  // Cool effect - randomness to line color
  // c.strokeStyle = `hsl(${strokeColor.h * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`;
  c.strokeStyle = `hsl(${strokeColor.h }, ${strokeColor.s}%, ${strokeColor.l}%)`;
  c.stroke();
  increment += wave.frequency

}

animate()