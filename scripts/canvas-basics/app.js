//@ts-check
import { SquareShape } from "./shapes/square.js";
import { Circleshape } from "./shapes/chalenge-friday.js";
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

let s1 = new SquareShape(0, 0, ctx, canvas);


let shapes = [];

for (let i = 0;i < 10000; i++) {
    shapes.push(new SquareShape(0,0,ctx,canvas));
    shapes.push(new Circleshape(0,0,ctx,canvas));
}



let lastTime = 0;

let hue = 0;function drawLoop(timestamp) {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let elapsedTime = lastTime;
    lastTime = timestamp;

    s1.draw();
    s1.update();

    for (const shape of shapes) {
        shape.update();
            shape.draw();
    }

    //console.log(elapsedTime);



    window.requestAnimationFrame(drawLoop);
}


window.requestAnimationFrame(drawLoop);
