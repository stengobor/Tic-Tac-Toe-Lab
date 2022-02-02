const spaces = [];
const playText = document.getElementById('playText');
const resetButton = document.getElementById('resetButton');
const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT;
let turnCounter = 0;

let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    const id = event.target.id;
    turnCounter++
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        console.log(turnCounter)
        if (playerHasWon()) {
            playText.innerText = (currentPlayer + ' Has Won!');
        } else if (turnCounter == 9) {
            playText.innerText = ('Draw!');

        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}



const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(currentPlayer + " Wins on the Top");
            return (true);
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(currentPlayer + " Wins on the Left");
            return (true);
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(currentPlayer + " Wins Diagonaly");
            return (true);
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(currentPlayer + " Wins on the Right");
            return (true);
        }
        if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(currentPlayer + " Wins on the Bottom");
            return (true);
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(currentPlayer + " Wins Down Middle");
            return (true);
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(currentPlayer + " Wins Across");
            return (true);
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(currentPlayer + " Wins Across");
            return (true);
        }

    }
}

const reset = () => {
    spaces.forEach((space, i) => {
        spaces[i] = null;
    })
    cells.forEach(cell => {
        cell.innerText = '';
    })
    playText.innerText = 'Tic Tac Toe';
    currentPlayer = X_TEXT;
    turnCounter = 0;
}

resetButton.addEventListener('click', reset);