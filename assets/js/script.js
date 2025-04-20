


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


runGame("addition");


/**
 * The main game "loop", called when the script is first loaded
 * after users answer has been processed 
 */

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionalQuestion(num1, num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}




function checkAnswer() {
    
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
    } else {
        alert(`Uniplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
    }


function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionalQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySustractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

