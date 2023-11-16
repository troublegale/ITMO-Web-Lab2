const canvas = document.getElementById("graph")
const ctx = canvas.getContext("2d")
let dim = canvas.clientWidth
canvas.width = dim
canvas.height = dim
let r = dim / 3

let rValue = parseInt(localStorage.getItem("rValue"))
if (isNaN(rValue)) {
    localStorage.setItem("rValue", undefined);
}
redrawGraph(localStorage.getItem("rValue"))
checkRBoxes()

let xCoordinate;
let yCoordinate;
document.querySelector('#graph').onmousemove = function (event) {
    event = event || window.event
    if (!isNaN(rValue)) {
        xCoordinate = ((event.offsetX / dim - 0.5) * 3 * rValue).toFixed(2)
        yCoordinate = -((event.offsetY / dim - 0.5) * 3 * rValue).toFixed(2)
        document.querySelector('#dynamic-x').innerHTML = "X: " + xCoordinate
        document.querySelector('#dynamic-y').innerHTML = "Y: " + yCoordinate
    }
}
document.querySelector('#graph').onclick = function () {
    if (checkRBoxes()) {
        sendParametersWithGraph(xCoordinate, yCoordinate, rValue)
    }
}

function redrawGraph(newR) {
    ctx.clearRect(0, 0, dim, dim)
    ctx.lineWidth = dim / 200
    drawAxes()
    drawArea()
    drawR(newR)
}

function drawAxes() {
    ctx.strokeStyle = "black"
    ctx.beginPath();
    //x-axis
    ctx.moveTo(3, dim / 2)
    ctx.lineTo(dim - 4, dim / 2)
    ctx.moveTo(dim - 16, dim / 2 - 7)
    ctx.lineTo(dim - 4, dim / 2)
    ctx.lineTo(dim - 16, dim / 2 + 7)
    //y-axis
    ctx.moveTo(dim / 2, 4)
    ctx.lineTo(dim / 2, dim - 3)
    ctx.moveTo(dim / 2 - 7, 16)
    ctx.lineTo(dim / 2, 4)
    ctx.lineTo(dim / 2 + 7, 16)
    //notches
    //x-axis notches
    ctx.moveTo(dim / 2 - r / 2, dim / 2 - 8)
    ctx.lineTo(dim / 2 - r / 2, dim / 2 + 8)
    ctx.moveTo(dim / 2 - r, dim / 2 - 8)
    ctx.lineTo(dim / 2 - r, dim / 2 + 8)
    ctx.moveTo(dim / 2 + r / 2, dim / 2 - 8)
    ctx.lineTo(dim / 2 + r / 2, dim / 2 + 8)
    ctx.moveTo(dim / 2 + r, dim / 2 - 8)
    ctx.lineTo(dim / 2 + r, dim / 2 + 8)
    //y-axis notches
    ctx.moveTo(dim / 2 - 8, dim / 2 - r)
    ctx.lineTo(dim / 2 + 8, dim / 2 - r)
    ctx.moveTo(dim / 2 - 8, dim / 2 - r / 2)
    ctx.lineTo(dim / 2 + 8, dim / 2 - r / 2)
    ctx.moveTo(dim / 2 - 8, dim / 2 + r)
    ctx.lineTo(dim / 2 + 8, dim / 2 + r)
    ctx.moveTo(dim / 2 - 8, dim / 2 + r / 2)
    ctx.lineTo(dim / 2 + 8, dim / 2 + r / 2)
    ctx.stroke();
    ctx.closePath();
}

function drawArea() {
    ctx.strokeStyle = "rgb(10, 47, 134)"
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(47, 109, 249, 0.4)")
    ctx.fillStyle = gradient;
    //rectangle
    ctx.beginPath()
    ctx.moveTo(dim / 2, dim / 2 - r)
    ctx.lineTo(dim / 2 + r / 2, dim / 2 - r)
    ctx.lineTo(dim / 2 + r / 2, dim / 2)
    //triangle
    ctx.lineTo(dim / 2, dim / 2 + r)
    //quarter-circle
    ctx.arc(dim / 2, dim / 2, r, 1 / 2 * Math.PI, Math.PI, false);
    ctx.lineTo(dim / 2, dim / 2)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

function drawR(newR) {
    let r1
    let r2
    if (isNaN(newR)) {
        r1 = "R"
        r2 = "R/2"
    } else {
        r1 = newR
        r2 = newR / 2
    }
    ctx.fillStyle = 'black'
    ctx.font = `${dim / 25}px Bahnschrift`;

    ctx.fillText('Y', dim / 2 + r / 12, 18)
    ctx.fillText('X', dim - 15, dim / 2 - dim / 30)

    //x
    ctx.fillText(r1, dim / 2 + r - r / 30, dim / 2 + r / 6);
    ctx.fillText(r2, dim / 2 + r / 2 - r / 20, dim / 2 + r / 6);
    ctx.fillText('-' + r1, dim / 2 - r - dim / 30, dim / 2 + r / 6);
    ctx.fillText('-' + r2, dim / 2 - r / 2 - dim / 30, dim / 2 + r / 6);
    //y
    ctx.fillText(r1, dim / 2 - r / 6, dim / 2 - r + r / 20);
    ctx.fillText(r2, dim / 2 - r / 4.5, dim / 2 - r / 2 + r / 20);
    ctx.fillText('-' + r1, dim / 2 - r / 5, dim / 2 + r + r / 20);
    ctx.fillText('-' + r2, dim / 2 - r / 3.67, dim / 2 + r / 2 + r / 20);
}

function drawPoint(x, y, result) {
    ctx.strokeStyle = "black"
    ctx.fillStyle = Boolean(result) ? "green" : "red"
    ctx.beginPath();
    ctx.arc((x / rValue / 3 + 0.5) * dim, (-y / rValue / 3 + 0.5) * dim, 5, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('rValue')) {
        localStorage.setItem('rValue', "R")
        rValue = "R"
    } else {
        rValue = localStorage.getItem('rValue')
    }
    redrawGraph(rValue)
    redrawPoint()

});
function redrawPoint(){
    const table = document.getElementById("result");
    if (table) {
        for (let item of table.rows) {
            const x = parseFloat(item.children[0].innerText.trim());
            const y = parseFloat(item.children[1].innerText.trim());
            const r = parseFloat(item.children[2].innerText.trim());
            if (isNaN(x) || isNaN(y) || isNaN(r)) continue;
            drawPoint(x, y, item.children[3].innerText.trim() === "true");
        }
    }
}
