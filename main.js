import {drawRect} from './figuresDrawing.js';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

drawRect(ctx, 50, 40, 250, 50);




ctx.beginPath();
ctx.arc(100, 90, 40, 0, Math.PI*1, false);
ctx.fillStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 90, 40, 0, Math.PI*1, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();