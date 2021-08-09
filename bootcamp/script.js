let button = document.getElementById("changing-button");
let changedElement = document.getElementById("changed-element");

function changeElement() {
    if (changedElement.textContent === "Now you don't") {
      changedElement.textContent = "Now you see me!";
    } else {
        changedElement.textContent = "Now you don't";
    }
  }

/* =========== HAMBURGER MENU ============ */
const hamburger = document.getElementById('hamburger');
const navUL =  document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

/*========== POLL =============== */
let chickenCount = document.getElementById("chicken-number-display");
let fishCount = document.getElementById("fish-number-display");

let count = 0;

function addChicken() {
  count += 1
  chickenCount.textContent = count;
}

function addFish() {
  count += 1
  fishCount.textContent = count;
}

function removeChicken() {
  count -= 1;
  chickenCount.textContent = count;
}

function removeFish() {
  count -= 1;
  fishCount.textContent = count;
}