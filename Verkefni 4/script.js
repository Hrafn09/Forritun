// Finna takka og teljara
let counter = 0;
const counterDisplay = document.getElementById("counter");
const countUpButton = document.getElementById("countUpButton");
const countDownButton = document.getElementById("countDownButton");
const countDoubleButton = document.getElementById("countDoubleButton")
const countResetButton = document.getElementById("countResetButton")

// Bæta við smellu-atburði fyrir hækkun
countUpButton.addEventListener("click", function()  {
    counter++;
    counterDisplay.textContent = counter;
});

// Bæta við smellu-atburði fyrir lækkun
countDownButton.addEventListener("click", function()  {
    counter--;
    counterDisplay.textContent = counter;
})

// Bæta við smellu-atburði fyrir hækkun +2
countDoubleButton.addEventListener("click", function()  {
    counter += 2;
    counterDisplay.textContent = counter;
});

// Bæta við smellu-atburði fyrir endurstillingu
countResetButton.addEventListener("click", function()  {
    counter = 0;
    counterDisplay.textContent = counter;
});