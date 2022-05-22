let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let R = 131;
let r = 62;
let d = 90;
let teta = 0;
let timer;
let speed = 0.0001;
let color = 'black';
let random = false;
ctx.fillStyle = color;
console.log('Стандартный радиус:' + R);
console.log('Стандартный второй радиус:' + r);
console.log('Стандартный диаметр:' + d);
console.log('Стандартная скорость:' + speed);
console.log('----------------------------------')
let red = 'red';
let blue = 'blue';
let black = 'black';
let green = 'green';
let yellow = 'yellow';
let color_list = [red,blue,black,green,yellow];

function spino() {
    let x = (R-r) * Math.cos(teta) + d * Math.cos((R-r)*teta/r); 
    let y = (R-r) * Math.sin(teta) - d * Math.sin((R-r)*teta/r); 
    teta = teta+0.01;
    ctx.fillRect(400+x, 300+y, 4, 4);
    timer = setTimeout(spino, speed);
    if (random) {
       let rc = color_list[Math.floor(Math.random()*5)]
       ctx.fillStyle = rc;
    }
}
//HTML Button Func
//Speed
let speed_plus = function() {
    speed -= 10;
    console.log("Скорость рисования:" + speed);
    ctx.clearRect(0, 0, 800, 600);
}

let speed_minus = function() {
    speed += 10;
    console.log("Скорость рисования:" + speed);
    ctx.clearRect(0, 0, 800, 600);
}
//Radius
let radius_plus = function() {
    R += 1;
    console.log('Радиус:' + R);
    ctx.clearRect(0, 0, 800, 600);
}

let radius_minus = function() {
    R -= 1;
    console.log('Радиус:' + R);
    ctx.clearRect(0, 0, 800, 600);
}
//MinRad
let minrad_plus = function() {
    r += 1;
    console.log('Второй радиус:' + r);
    ctx.clearRect(0, 0, 800, 600);
}

let minrad_minus = function() {
    r -= 1;
    console.log('Второй радиус:' + r);
    ctx.clearRect(0, 0, 800, 600);
}
//Colors
let color_red = function() {
    color = 'red';
    console.log("Цвет изменён на - " + color);
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 800, 600);
}
let color_green = function() {
    color = 'green';
    console.log("Цвет изменён на - " + color);
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 800, 600);
}
let color_yellow = function() {
    color = 'yellow';
    console.log("Цвет изменён на - " + color);
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 800, 600);
}
let color_default = function() {
    color = 'black';
    console.log("Цвет изменён на - " + color);
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 800, 600);
}
let color_blue = function() {
    color = 'blue';
    console.log("Цвет изменён на - " + color);
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 800, 600);
}
//random
let color_random = function() {
    if (!random) {
        random = true;
        ctx.clearRect(0, 0, 800, 600);
    }
    else {
        random = false;
        ctx.fillStyle = 'black';
        ctx.clearRect(0, 0, 800, 600);
    }
    console.log('Random:' + random);
}
spino();