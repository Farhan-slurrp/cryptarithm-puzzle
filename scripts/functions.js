function assert(truthy, message) {
    if (!truthy) {
        throw new Error(message);
    }
}

function checkAnswer() {
    assert(level != null, "The level is invalid");
    assert(question != null, "The question is invalid");


    let top = [];
    let bottom = [];
    let answer = [];

    question["top"].forEach(letter => {
        top.push(uniqueLettersMap.get(letter));
    });
    top = Number(top.join(""));

    question["bottom"].forEach(letter => {
        bottom.push(uniqueLettersMap.get(letter));
    });
    bottom = Number(bottom.join(""));

    question["answer"].forEach(letter => {
        answer.push(uniqueLettersMap.get(letter));
    });
    answer = Number(answer.join(""));

    return top + bottom === answer;
}

function checkIfFieldsFilled() {
    if (!Array.from(uniqueLettersMap.values()).includes(null, "")) {
        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.disabled = false;
    }
}

function getCurrentLevel() {
    return searchParams.get("level");
}

function getUniqueLetters(level) {
    question = questions[level -1];
    const uniqueLetters = new Set([
        ...question["top"], 
        ...question["bottom"], 
        ...question["answer"]
    ]);
    const uniqueLettersArray = [...uniqueLetters].sort();
    uniqueLettersArray.forEach(letter => {
        uniqueLettersMap.set(letter, null);
    })
    return uniqueLettersArray;
}

function goToLevel(level) {
    if ('URLSearchParams' in window) {
        searchParams.set("level", level);
        window.location.search = searchParams.toString();
    }
}

function handleChange(e) {
    if (e.value.length > e.maxLength) e.value = e.value.slice(-1)[0];
    if (Array.from(uniqueLettersMap.values()).includes(e.value)) {
        e.value = null;
    }
    if(e.value.length == 0) return;

    const id = e.getAttribute("data-id");
    uniqueLettersMap.set(id, e.value);
    checkIfFieldsFilled();
}

function next() {
    goToLevel(Number(level) + 1);
}

function retry() {
    localStorage.setItem(LAST_FINISHED_LEVEL, Number(level) - 1);
    window.location.reload();
}

function runWhenAnswerIsCorrect() {
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");
    const answer = document.querySelector(".answer");

    top.innerHTML = "";
    question["top"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = uniqueLettersMap.get(ch);
        top.appendChild(char);
    });

    bottom.innerHTML = "";
    question["bottom"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = uniqueLettersMap.get(ch);
        bottom.appendChild(char);
    });

    answer.innerHTML = "";
    question["answer"].forEach(ch => {
        const char = document.createElement("div");
        char.innerHTML = uniqueLettersMap.get(ch);
        answer.appendChild(char);
    });

    localStorage.setItem(LAST_FINISHED_LEVEL, level);
    const buttons = document.querySelector(".buttons-wrapper");
    buttons.innerHTML = `
        <button class="retry-n-next-btn" onclick="retry()"><span>&circlearrowleft;</span> Retry</button>
        <buttton class="retry-n-next-btn" onclick="next()"><span>→</span> Next</button>
    `
}

function start() {
    goToLevel(1);
}

function submit() {
    const correct = checkAnswer();
    const answerFeedback = document.querySelector(".answer-feedback");
    if (correct) {
        runWhenAnswerIsCorrect();
        answerFeedback.innerHTML = "Correct!"
    } else {
        answerFeedback.innerHTML = "Wrong!";
    }

}
