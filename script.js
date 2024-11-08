const number = document.getElementById("num");

const inc = document.getElementById("inc");
const res = document.getElementById("res");
const dec = document.getElementById("dec");

inc.addEventListener("click", () => {
    number.textContent = parseInt(number.textContent) + 1;
});

dec.addEventListener("click", () => {
    number.textContent = parseInt(number.textContent) - 1;
});

res.addEventListener("click", () => {
    number.textContent = "0";
});

