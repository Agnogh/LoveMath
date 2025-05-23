


/* Good idea to wait for DOM to finish loading before starting to run the code as it might trying to target elements that havent loaded yet and dont exist */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");  /* we are tagging by tag name that is button and we have 5 in total */ 
 /*   for (let i = 0; i < buttons.length; i++) -> this is less modern syntax) */
    for (let button of buttons) { /* goes through our button array and return each element in array which will be stored in that variable button on each iteration */
        button.addEventListener("click", function() {   /* button represents individual button element  */ 
            if (this.getAttribute("data_type") === "submit") { /* "this" refers to the button that was just clicked. Checks the attribute of the data type to see the value and if it is EQUAL to submit you are getting Alert message*/
               /* alert("You clicked Submit!"); */
               checkAnswer();   /* this calls out the function below called "checkFunction"  */
            } else {
                let gameType = this.getAttribute("data_type");
                /*alert(`You clicked ${gameType}`); */
                runGame(gameType);
            }
        })
    }
})

document.getElementById("answer_box").addEventListener("keydown", function(event) {
    /**
     * listening for the "keydown event" (when the key is pressed)
     * and if the key pressed in "Enter", then run function
     */
    if (event.key === "Enter") {
        checkAnswer();
    }
})

runGame("addition");


/**
 * The main game "loop", called when the script is first loaded
 * after users answer has been processed 
 */

function runGame(gameType) {
/**
 * This clears out the value in the answer box by making it appear blank
 */
    document.getElementById("answer_box").value = "";

/**
* This creates that cursor always shows up on the text box
*/
    document.getElementById("answer_box").focus();
    /**
     * Creates two random numbers between 1 and 25
     */
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionalQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySustractQuestion(num1, num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


/***
 * Checks the answer against first element in
 * the return calculateCorrectAnswer array
 */

function checkAnswer() {   
    let userAnswer = parseInt(document.getElementById("answer_box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer=== calculatedAnswer[0];

    if(isCorrect) {
        alert("Hey! You got it right");
        incrementScore();
    } else {
        alert(` Darn, your answer is ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }
}
    


/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answer.
 */

function calculateCorrectAnswer() {
    let operand1 = parseINT(document,getElementById("operand1").innerText);
    let operand2 = parseINT(document,getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];   /* calucaltes num1 and num2 and calles the fucntion "addition" that means "Keep playing addition game" */ 
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Uniplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
    }

    /**
     * Gets the current score from the DOM and increments it by 1
     */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from DOM and increments it by 1
 */

function incrementWrongAnswer() {
   let oldScore = parseInt(document.getElementById("incorrect").innerText); /* we are calling out different id  */
   document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionalQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySustractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    /**
     * this works same as IF statement
     * condition that we are checking goes BEFORE question mark which means
     * is operand 1 bigger than operand 2 and if so...
     * return operand1
     * if not (else part) return operand2
     */
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

