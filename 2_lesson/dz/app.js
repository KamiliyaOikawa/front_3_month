let i = 0;

function any() {
    i++;
    console.log(i + " сек.");
}

id = setInterval(any, 1000);

const funk = (n) => {
    return function (num) {
        return n + num;
    };
};

const addOne = funk(1);
const addTen = funk(10);

const block = document.querySelector(".block");

let positionX = 0;
let PositionY = 0;

const move = function () {
    let rad = {
        radius: 180,
        speed: 25
    }
    let f = 0;
    let s = 2 * Math.PI / 180
    setInterval(function () {
        f += s;
        block.style.left = 180 + rad.radius * Math.sin(f) + 'px';
        block.style.top = 180 + rad.radius * Math.cos(f) + 'px';
    }, rad.speed)
}

let counter = 0
requestAnimationFrame(move)