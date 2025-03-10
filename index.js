// Your code here
// Move Left
const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

//Move Right 
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("360px", "");
    const left = parseInt(rightNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left + 1}px`
 }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
  });