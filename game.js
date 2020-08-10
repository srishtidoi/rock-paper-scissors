const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerside = document.querySelector("#player-footer");
const computerside = document.querySelector("#computer-footer"); 
const pscore = document.createElement("div");
const cscore = document.createElement("div");
const you = document.querySelector("#you");

pscore.classList.add("score");
cscore.classList.add("score");

computerside.appendChild(cscore);
playerside.insertBefore(pscore, you);

const popup = document.querySelector(".popup");
const newgame = document.querySelector("#newgame");
const message = document.querySelector("#msg");
newgame.onclick = function() {
    window.location.reload();
}
message.classList.add("message");
//newgame.innerHTML = "new game";
//popup.classList.add("popup");
//popup.appendChild(newgame);
//body.appendChild(popup);

let playerscore = 0;
let computerscore = 0;
updatescore();

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
    console.log(msg);
    message.innerHTML = msg;
    popup.classList.add("show");
    
}

function playRound(playerMove) {

    let computerMove = computerPlay();
    let win;
    let msg;
    // in case of a draw	  
    if (playerMove === computerMove) {
	msg = "It's a draw!";
	win = 'none';
    } else {
	// determine winner
	win = winner(playerMove, computerMove);
	// return message
	if (win == 'player') {
	    msg = `You win :)`;
	    playerscore++;
	}
	else if (win == 'computer') {
	    msg = `You lose :(`;
	    computerscore++;
	}
	
    }
    console.log(msg);
    console.log(computerscore);
    console.log(playerscore);
    updatescore();
    //return win;
    if (playerscore == 3 || computerscore == 3) {
	endgame();
	return;
    }
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
function play(playcode) {
    let play;
    switch (playcode) {
    case 1:
	playcode = 'rock';
	break;
    case 2:
	playcode = 'paper';
	break;
    case 3:
	playcode = 'scissors';
	break;
    }
    return playcode;
}


function computerPlay() {
    // produces a random move (rock, paper or scissors)
    let playcode = Math.floor(Math.random()*(3) + 1);
    // playcode: 1-rock 2-paper 3-scissors
    return playcode;
}
