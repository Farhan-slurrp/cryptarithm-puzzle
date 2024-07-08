const searchParams = new URLSearchParams(window.location.search);
const loading = document.querySelector(".loading");
const home = document.querySelector(".home");
const mainGame = document.querySelector(".main-game");
const level = getCurrentLevel(); 
if (level) {
    loading.style.display = "none";
    home.style.display = "none";
    mainGame.style.display = "flex";

    const levelElem = document.querySelector(".level");
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");
    const answer = document.querySelector(".answer");
    const letters = document.querySelector(".letters");

    levelElem.innerHTML = `Level ${level}`;

    const question = questions[level - 1];
    question["top"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = ch;
        top.appendChild(char);
    });
    question["bottom"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = ch;
        bottom.appendChild(char);
    });
    question["answer"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = ch;
        answer.appendChild(char);
    });

    const uniqueLetters = getUniqueLetters(level);
    uniqueLetters.forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = ch;
        letters.appendChild(char);
    });
} else {
    loading.style.display = "none";
    home.style.display = "flex";
    mainGame.style.display = "none";
}