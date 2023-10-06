'use strict';
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;
const initialize = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
initialize();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click",()=>{
    // 1. Random dice roll
    if(playing){
        const dice = Math.trunc(Math.random()*6) + 1;
        // 2. Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `/images/dice-${dice}.png`;
        // 3. Check for roll, if roll is 1, switch to next player
        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        }
    }
});
btnHold.addEventListener("click", ()=>{
    // 1. Add current score to active player
    if (playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = Number(scores[activePlayer]);
        // 2. Check if player score is more than 100, 
        // Finish the game
        if (scores[activePlayer] > 50){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add("hidden");
            document.getElementById(`name--${activePlayer}`).textContent = "Winner";            
        }
        // 3. Switch to next player
        switchPlayer();
    }
});
btnNew.addEventListener("click", initialize);
