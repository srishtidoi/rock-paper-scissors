/* selecting the buttons */
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

/* adding scores to the footers */
const playerside = document.querySelector("#player-footer");
const computerside = document.querySelector("#computer-footer"); 
const pscore = document.createElement("div");
const cscore = document.createElement("div");
const you = document.querySelector("#you");

pscore.classList.add("score");
cscore.classList.add("score");

computerside.appendChild(cscore);
playerside.insertBefore(pscore, you);

/* new game popup at the end of the game */
const popup = document.querySelector(".popup");
const newgame = document.querySelector("#newgame");
const message = document.querySelector("#msg");
newgame.onclick = function() {
    window.location.reload();
}
message.classList.add("message");

/* round number */
let round = 0;
const roundcard = document.querySelector("#round-number");

/* initial scores */
let playerscore = 0;
let computerscore = 0;
updatescore(); // adding to the scoreboard

/* calling the playRound function on button click */
rock.addEventListener("click", function() {
    playRound(1);
});
paper.addEventListener("click", function() {
    playRound(2);
});
scissors.addEventListener("click", function() {
    playRound(3);
});

function endgame() {
    let msg = (playerscore>computerscore)?"Yay! You won the game":"Oof! You lost the game haha whata loser";
    message.innerHTML = msg;
    popup.classList.add("show"); // making the new game popup visible
}

function playRound(playerMove) {
    updateround();
    let computerMove = computerPlay();
    let win; // winner of this round

    /* in case of a draw */
    if (playerMove === computerMove) {
	win = 'none';
    } else {
	win = winner(playerMove, computerMove);
	if (win == 'player') {
	    playerscore++;
	}
	else if (win == 'computer') {
	    computerscore++;
	}
	
    }
    updatescore();

    /* end game when either player reaches a score of 3 */
    if (playerscore == 3 || computerscore == 3) {
	endgame();
	return;
    }
}

function updateround() {
    round++;
    roundcard.innerHTML = `Round ${round}`;
    console.log(round);
}

function updatescore() {
    pscore.textContent = playerscore;
    cscore.textContent = computerscore;
}

function winner(playerMove, computerMove) {
    let play = playerMove + computerMove
    let winner;
    if (play == 3) { // rock-paper
	winner = (playerMove == 2)? 'player' : 'computer';
    }
    else if (play == 4) { // rock-scissors
	winner = (playerMove == 1)? 'player' : 'computer';
    }
    else if (play == 5) { // scissors-paper
	winner = (playerMove == 3)? 'player' : 'computer';
    }
    return winner;
}

/* funtion to convert string to playcode (1-rock 2-paper 3-scissors) */
function playCode(play) {
    let playcode;
    switch (play) {
	case 'rock':
	    playcode = 1;
	    break;
	case 'paper':
	    playcode = 2;
	    break;
	case 'scissors':
	    playcode = 3;
	    break;
    }
    return playcode;
}

/* function to convert code to string */
function play(playcode) {
    let play;
    switch (playcode) {
    case 1:
	play = 'rock';
	break;
    case 2:
	play = 'paper';
	break;
    case 3:
	play = 'scissors';
	break;
    }
    return play;
}

/* funciton to make a random move (rock, paper or scissors) */
function computerPlay() {
    let playcode = Math.floor(Math.random()*(3) + 1);
    return playcode;
}