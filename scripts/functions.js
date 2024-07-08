function getCurrentLevel() {
    return searchParams.get("level");
}

function getUniqueLetters(level) {
    question = questions[level -1];
    const uniqueLetters = new Set([
        ...new Set(question["top"]), 
        ...new Set(question["bottom"]), 
        ...new Set(question["answer"])
    ]);
    return [...uniqueLetters].sort();
}

function goToLevel(level) {
    if ('URLSearchParams' in window) {
        searchParams.set("level", level);
        window.location.search = searchParams.toString();
    }
}

function start() {
    goToLevel(1);
}