var timer = 60;
var score = 0;
var hitrn = 0;

function IncreaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";

  for (let i = 1; i < 163; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
  var timerinvl = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
      clearInterval(timerinvl);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    IncreaseScore();
    makebubble();
    getNewHit();
  }
});

getNewHit();
makebubble();
runtimer();
