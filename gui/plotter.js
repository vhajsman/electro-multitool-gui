var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

const bh = canvas.height;
const bw = canvas.width;

function drawLine(x1, y1, x2, y2, style) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.stroke();
    ctx.strokeStyle = style;
}

function drawGrid(p, spacing, updateFreq) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    for (var x = 0; x <= bw; x += spacing) {
        ctx.moveTo(0.5 + x + p, 0);
        ctx.lineTo(0.5 + x + p, bh - p);
    }

    for (var x = 0; x <= bh; x += spacing) {
        ctx.moveTo(p, 0.5 + x - p);
        ctx.lineTo(bw + p, 0.5 + x - p);
    }
    
    ctx.strokeStyle = "#ffffff33";
    ctx.stroke();


    ctx.fillStyle = "#aaff00dd";
    ctx.font = "9px monospace";
    ctx.fillText("MT GUI", bw - 100, 10);
    ctx.fillText(`Upd. freq.: ${updateFreq} u/s`, bw - 100, 19);

    ctx.fillStyle = "red";
    ctx.font = "20px monospace";
    ctx.fillText("No device connected!!!", 50, 50);

    drawLine(p, 10, p, 10 +  bh - p, "white");
}

drawGrid(10, 5, 100);

