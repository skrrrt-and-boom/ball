const div = document.querySelector('div');
const width = document.body.scrollWidth;
const height = document.body.scrollHeight;
const body = document.querySelector('body');

let click = 0;
let vol = 0;
let audio = new Audio('sound.mp3')
audio.volume = vol;

colors0 = ['brown', 'blue', 'coral', 'crimson', 'darkgreen', 'gold', 'indigo', 'navy', 'plum'];
colors1 = ['black', 'white'];

function colorPick(colors) {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function position(dir) {
  let output = Math.floor(Math.random() * dir) - 80
  return (output + "px");
}

function fun() {
  if (vol < 1) {
    vol += 0.2;
    audio.volume = vol;
  }
  div.style.backgroundColor = colorPick(colors0);
  div.style.left = position(width);
  div.style.top = position(height);
  click += 1;
  if (click >= 5 && click < 20) {
    body.style.backgroundColor = colorPick(colors1);
  }
  else if (click >= 20) {
    body.style.backgroundColor = 'black';
    div.style.backgroundColor = 'black';
  }
  console.log(click);
}

div.addEventListener('click', fun);

audio.play();
