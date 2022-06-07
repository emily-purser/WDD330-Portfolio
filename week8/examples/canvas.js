//Demo 1
let canvas = document.getElementById("myCanvas"); 
console.log(canvas);
let context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

//Demo 2
let canvas2 = document.getElementById('demo2');
console.log(canvas2);
let context2 = canvas2.getContext("2d");
context2.strokeStyle = 'red';
let img = new Image();
img.src = './images/bg-bike.png';
img.onload = function() {
    let pattern = context2.createPattern(img, "repeat");
    context2.fillStyle = pattern;
    context2.fillRect(10, 10, 100, 100);
    context2.strokeRect(10, 10, 100, 100);
}

//Demo 3
let canvas3 = document.getElementById("demo3");
let context3 = canvas3.getContext("2d");
context3.strokeStyle = "red";
let gradient = context3.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "purple");
gradient.addColorStop(1, "white");
context3.fillStyle = gradient;
context3.fillRect(10, 10, 100, 100);
context3.strokeRect(10, 10, 100, 100);

//Demo 4
function drawCircle(canvas) {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "goldenrod";
    context.fillStyle = "yellow";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
let canvas4 = document.getElementById('demo4');
drawCircle(canvas4);

//Demo 5
function saveDrawing() {
    let canvas5 = document.getElementById('demo5');
    drawCircle(canvas5);
    window.open(canvas5.toDataURL("image/png"));
}
let button = document.getElementById("saveButton");
// button.addEventListener("click", saveDrawing(), false);

//Demo 6 
window.addEventListener("load", drawImageToCanvas, false);
function drawImageToCanvas() {
    let canvas = document.getElementById('demo6');
    let context = canvas.getContext('2d');
    let image = document.getElementById('myImageElem');
    context.drawImage(image, 68, 68);
}

//Demo 7
window.addEventListener("load", manipulateImage, false);
function manipulateImage() {
    let canvas = document.getElementById('demo7');
    let context = canvas.getContext('2d');
    let image =document.getElementById('secondImage');
    context.drawImage(image, 68, 68);

    let imageData = context.getImageData(0, 0, 200, 200);

    let red, green, blue, greyscale;

    for( var i=0; i<imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i+1];
        blue = imageData.data[i + 2];

        greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

        imageData.data[i] = greyscale;
        imageData.data[i + 1] = greyscale;
        imageData.data[i+ 2] = greyscale;
    }
    context.putImageData(imageData, 0, 0);
}