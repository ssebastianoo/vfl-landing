var scroll = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollOverflowRight() {
  var initial_scroll = document.getElementById("videos").scrollLeft
  var scroll = document.getElementById("videos").scrollLeft + 320

  var s = true
  for (i=initial_scroll; i < scroll; i++) {
    if (s === 3) {
      document.getElementById("videos").scrollLeft = i;
      await sleep(0.001);
      s = 0;
    } else {
      s++;
    }
  }
}

async function scrollOverflowLeft() {
  var initial_scroll = document.getElementById("videos").scrollLeft
  var scroll = document.getElementById("videos").scrollLeft - 320
  var s = true
  for (i=initial_scroll; i > scroll; i--) {
    if (s === 3) {
      document.getElementById("videos").scrollLeft = i;
      await sleep(0.001);
      s = 0;
    } else {
      s++;
    }
  }
}
