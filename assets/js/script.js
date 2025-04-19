


/* Good idea to wait for DOM to finish loading before starting to run the code as it might trying to target elements that havent loaded yet and dont exist */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");  /* we are tagging by tag name that is button and we have 5 in total */ 
 /*   for (let i = 0; i < buttons.length; i++) -> this is less modern syntax) */
    for (let button of buttons) { /* goes through our button array and return each element in array which will be stored in that variable button on each iteration */
        button.addEventListener("click", function() {   /* button represents individual button element  */ 
            if (this.getAttribute("data_type") === "submit") { /* "this" refers to the button that was just clicked. Checks the attribute of the data type to see the value and if it is EQUAL to submit you are getting Alert message*/
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data_type");
                alert(`You clicked ${gameType}`); 
            }
        })
    }
})



function runGame() {

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionalQuestion() {
    
}

function displaySustractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

