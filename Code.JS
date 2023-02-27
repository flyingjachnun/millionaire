const elementButtonA = document.getElementById("button-a");
const elementButtonB = document.getElementById("button-b");
const elementButtonC = document.getElementById("button-c");
const elementButtonD = document.getElementById("button-d");
const elementButtonReset = document.getElementById("button-reset");

elementButtonA.addEventListener("click", wrongAnswer);
elementButtonB.addEventListener("click", rightAnswer);
elementButtonC.addEventListener("click", wrongAnswer);
elementButtonD.addEventListener("click", wrongAnswer);
elementButtonReset.addEventListener("click", resetGame);
var questionNumber = 1
// to reset a game: questionNumber = 1, Reset header-question, buttons
function resetGame() {
    questionNumber = 1
    updateAnswersText()
    const elementHeaderQuestion = document.getElementById("header-question");
    elementHeaderQuestion.innerText = "Who was the first black president of the United States of America?"
    const elementInputResult = document.getElementById("input-print-result");
    elementInputResult.value = ""
    elementButtonA.hidden = false
    elementButtonB.hidden = false
    elementButtonC.hidden = false
    elementButtonD.hidden = false
    elementButtonA.disabled = false
    elementButtonB.disabled = false
    elementButtonC.disabled = false
    elementButtonD.disabled = false
    elementButtonReset.hidden = false
    elementButtonReset.disabled = true

}

function wrongAnswer() {
    const elementInputResult = document.getElementById("input-print-result");
    elementInputResult.value = "Wrong Answer"
    elementButtonA.disabled = true
    elementButtonB.disabled = true
    elementButtonC.disabled = true
    elementButtonD.disabled = true
    elementButtonReset.disabled = false
}
function rightAnswer() {

    if (questionNumber === 1) {
        questionNumber = questionNumber + 1
        const elementHeaderQuestion = document.getElementById("header-question");
        elementHeaderQuestion.innerText = "What is The Average Speed of Sound?"
        updateAnswersText()
        switchButtonEvents()
    }
    else if (questionNumber === 2) {
        questionNumber = questionNumber + 1
        const elementHeaderQuestion = document.getElementById("header-question");
        elementHeaderQuestion.innerText = "Why is Mor Yemen?"
        updateAnswersText()
        switchButtonEvents()
    }
    else if (questionNumber === 3) {
        questionNumber = questionNumber + 1
        const elementHeaderQuestion = document.getElementById("header-question");
        elementHeaderQuestion.innerText = "When did Germany lose the war at WW II?"
        updateAnswersText()
        switchButtonEvents()
    }
    else if (questionNumber === 4) {
        questionNumber = questionNumber + 1
        const elementHeaderQuestion = document.getElementById("header-question");
        elementHeaderQuestion.innerText = "When did Germany lose the war at WW II?"
        updateAnswersText()
        winningAnswer()
    }


}
function updateAnswersText() {

    if (questionNumber === 1) {
        elementButtonA.innerText = "A - Donald Trump"
        elementButtonB.innerText = "B - Barak Obama"
        elementButtonC.innerText = "C - Loey C K"
        elementButtonD.innerText = "D - Benjamin Netanyahu"
    }


    else if (questionNumber === 2) {
        elementButtonA.innerText = "A - 344 Kmh"
        elementButtonB.innerText = "B - 34583475809 Kmh"
        elementButtonC.innerText = "C - 1 Kmh"
        elementButtonD.innerText = "D - Neither of The Previous"
    }
    else if (questionNumber === 3) {
        elementButtonA.innerText = "A - Who knows"
        elementButtonB.innerText = "B - His dad is yemen"
        elementButtonC.innerText = "C - his mom is dutch"
        elementButtonD.innerText = "D - peanuts"
    }
    else if (questionNumber === 4) {
        elementButtonA.innerText = "A - 1945"
        elementButtonB.innerText = "B - 1915"
        elementButtonC.innerText = "C - 2012"
        elementButtonD.innerText = "D - 1568"
    }
    else if (questionNumber === 5) {
        elementButtonA.innerText = ""
        elementButtonB.innerText = ""
        elementButtonC.innerText = ""
        elementButtonD.innerText = ""
    }
}
function switchButtonEvents() {
    if (questionNumber === 2) {
        elementButtonD.removeEventListener("click", wrongAnswer);
        elementButtonB.removeEventListener("click", rightAnswer);
        elementButtonA.removeEventListener("click", wrongAnswer);
        elementButtonB.addEventListener("click", wrongAnswer);
        elementButtonD.addEventListener("click", rightAnswer);
    }
    else if (questionNumber === 3) {
        elementButtonD.removeEventListener("click", rightAnswer);
        elementButtonB.removeEventListener("click", wrongAnswer);
        elementButtonB.addEventListener("click", rightAnswer);
        elementButtonD.addEventListener("click", wrongAnswer);
    }
    else if (questionNumber === 4) {
        elementButtonD.removeEventListener("click", wrongAnswer);
        elementButtonB.removeEventListener("click", rightAnswer);
        elementButtonA.addEventListener("click", rightAnswer);
        elementButtonD.addEventListener("click", wrongAnswer);
        elementButtonB.addEventListener("click", wrongAnswer);
    }
}


function winningAnswer() {
    const elementInputResult = document.getElementById("input-print-result");
    elementInputResult.value = "Yay! End of Game"
    elementButtonA.hidden = true
    elementButtonB.hidden = true
    elementButtonC.hidden = true
    elementButtonD.hidden = true
    elementButtonReset.disabled = false
}

//add a fourth question, when asnwered right - "yay! End of Game"
//and switch the buttons into disabled
//on wrong answer, add a start over button, when clicked, move to question number 1
