let button = document.getElementById("changing-button");
let changedElement = document.getElementById("changed-element");

function changeElement() {
    if (changedElement.textContent === "Now you don't") {
      changedElement.textContent = "Now you see me!";
    } else {
        changedElement.textContent = "Now you don't";
    }
  }