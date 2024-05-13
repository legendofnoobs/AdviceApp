const URL = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector("#adv-id");
const adviceText = document.querySelector("#adv-text");
const btn = document.querySelector(".dice-container");

getAdvice();

btn.addEventListener("click", function() {
    diceRollAnimation(btn);
    getAdvice();
});

async function getAdvice() {
    const response = await fetch(URL);
    const data = await response.json();

    adviceId.innerText = data.slip.id;
    adviceText.innerText = `${data.slip.advice}`;
}

const diceRollAnimation = (btn) => {
    btn.classList.add("rotate");

    setTimeout(() => {
    btn.classList.remove("rotate");
    }, 400);
};
