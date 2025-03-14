// Finna takka og teljara
let counter = 0;
const counterDisplay = document.getElementById("counter");
const button = document.getElementById("countButton");

// Bæta við smellu-atburði
button.addEventListener("click", function()  {
    counter++;
    counterDisplay.textContent = counter;
})