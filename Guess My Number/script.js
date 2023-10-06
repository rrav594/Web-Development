'use strict';
let secretNumber = Math.trunc(Math.random()*100) + 1;
let score = 20;
console.log(secretNumber);
let highScore = 0;
const displayMessage = (message)=>{document.querySelector(".message").textContent = message};

document.querySelector(".check").addEventListener("click", function(event){
    event.preventDefault();
    const guess = Number(document.querySelector(".guess").value);
    if (!guess || typeof(guess) == 'string'){
        if (score > 1){
            displayMessage("No input given/ Enter a number");
            score -= 1;
            document.querySelector(".label-score").textContent = score;
        }else{
            displayMessage("You have lost the game");
            document.querySelector(".label-score").textContent = 0;
        }
    }
    else if (guess === secretNumber){
        if (score > 1){
            displayMessage("Correct Number. Congrats!");
            score -= 1;
            document.querySelector(".label-score").textContent = score;
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector(".guess").readOnly = true;
            // document.querySelector(".check").addEventListener("click", ()=>{
            //     alert("You have won, do you want to play again?");
            // })
            if (score > highScore){
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }

        }
    }
    else if(guess !== secretNumber){
        if (score > 1){
            displayMessage(guess < secretNumber ? "Guess Higher" : "Guess Lower");
            score -= 1;
            document.querySelector(".label-score").textContent = score;
        }else{
            displayMessage("You have lost the game");
            document.querySelector(".label-score").textContent = 0;
        }
    }
})    
document.querySelector(".again").addEventListener("click", function(event){
    event.preventDefault();
    secretNumber = Math.trunc(Math.random()*100) + 1;
    console.log(secretNumber);
    score = 20;
    displayMessage("Start Guessing...");
    document.querySelector(".label-score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").readOnly = false;
    // document.querySelector(".check").addEventListener("click", null);
    //document.querySelector(".highscore").textContent = 0;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})