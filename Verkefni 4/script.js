// Finna takka og teljara
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
const counterDisplay = document.getElementById("counter");
const countUpButton = document.getElementById("countUpButton");
const countDownButton = document.getElementById("countDownButton");
const countDoubleButton = document.getElementById("countDoubleButton")
const countResetButton = document.getElementById("countResetButton")
const secretDoubleButton = document.getElementById("secretDoubleButton")

// Sýna vistað gildi þegar síða hleðst
counterDisplay.textContent = counter;

// Function til að uppfæra teljara og vista í LocalStorage
function updateCounter(value) {
    counter += value;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter);
}

// Atburðarhlustarar fyrir takka
countUpButton.addEventListener("click", function() {
    updateCounter(1);
});

countDownButton.addEventListener("click", function() {
    updateCounter(-1);
});

countDoubleButton.addEventListener("click", function() {
    updateCounter(2);
});

// Núllstilla teljara
countResetButton.addEventListener("click", function() {
    counter = 0;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter);
});

// Tvöfalda teljara
secretDoubleButton.addEventListener("click", function()  {
    counter *= 2;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter);
});