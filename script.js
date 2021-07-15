const textEl = document.getElementById('text');
const text = "Hi I am Muhammad Sabbir Hossain";
const speedEl = document.getElementById('speed');

let i = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, i);
    i++;

    if (i > text.length) {
        i = 1;
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('click', function (e) {
    speed = 300 / e.target.value;
})