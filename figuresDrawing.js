function drawRect(ctx, posX, posY, width, height){
    ctx.beginPath();
    ctx.rect(posX, posY, width, height);
    ctx.fillStyle = "#FF0000"
    ctx.fill();
    ctx.closePath();
}
export {drawRect};