function checkIfFieldsFilled() {
    if (!Array.from(uniqueLettersMap.values()).includes(null)) {
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
    const id = e.getAttribute("data-id");
    uniqueLettersMap.set(id, e.value);
    checkIfFieldsFilled();
}

function start() {
    goToLevel(1);
}