console.profile("Core Html5 Aimations");


const canvas = document.querySelector('canvas'),
      context = canvas.getContext("2d");

context.font = "44pt Arial";
context.fillStyle = "cornflowerblue";
context.strokeStyle = "blue";

context.fillText("Hello Canvas Essentials", canvas.width /2-100, canvas.height/2+15);

context.strokeText("Hello Canvas Essentials", canvas.width /2-100, canvas.height/2+15);
























console.profileEnd();