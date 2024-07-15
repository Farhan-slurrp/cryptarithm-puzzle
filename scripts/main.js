const searchParams = new URLSearchParams(window.location.search);
const loading = document.querySelector(".loading");
const home = document.querySelector(".home");
const mainGame = document.querySelector(".main-game");
const lastFinishedLevel = localStorage.getItem(LAST_FINISHED_LEVEL);
const actualCurrentLevel = Number(lastFinishedLevel) + 1;
level = getCurrentLevel(); 

if(lastFinishedLevel > 0 && level != actualCurrentLevel) {
    goToLevel(actualCurrentLevel);
}

if (level) {
    if ((!lastFinishedLevel || lastFinishedLevel <= 0) && level != "1") {
        goToLevel(1);
    }
    loading.style.display = "none";
    home.style.display = "none";
    mainGame.style.display = "flex";

    const levelElem = document.querySelector(".level");
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");
    const answer = document.querySelector(".answer");
    const letters = document.querySelector(".letters");

    levelElem.innerHTML = `Level ${level}`;

    question = questions[level - 1];
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
        char.classList.add("input-wrapper");
        char.innerHTML = `
            <p class="letter">${ch}</p>
            <input class="answer-input" data-id=${ch} type="number" oninput="handleChange(this)" maxLength="1" min="0" />
        `;
        letters.appendChild(char);
    });
    
} else {
    loading.style.display = "none";
    home.style.display = "flex";
    mainGame.style.display = "none";
}