console.profile("Core Html5 Aimations");


const canvas = document.querySelector('canvas'),
      c  = canvas.getContext("2d"),
      cw = canvas.width = innerWidth,
      ch = canvas.height = innerHeight;


// c.onmousedown = (e) => {
//     console.log("mouse event ...")
// }

canvas.addEventListener('mousedown', (e)=>{
    console.log(e,"here",this)
})











console.profileEnd();