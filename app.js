let cells = document.querySelectorAll('.row > div');
let winner = document.getElementById("winnerDraw"); 
let circleTurn;
let circleClass = 'O';
let xClass = 'X';
let draw = 0;

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked, { once: true });

}

function cellClicked(ev) {
    (ev.target).textContent = circleTurn ? circleClass : xClass;
    currentClass = circleTurn ? circleClass : xClass;

    swapTurns()
    
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText == "") {
            (ev.target).innerText = currentClass;
            if (playerWon()) {
                winner.innerText = "Congrats, you WIN!";
                setTimeout(() => {
                    location.reload();
                }, 2000);
                return;
            }
            if (playerDraw()) {
                winner.innerText = "It's a TIE!";
                setTimeout(() => {
                    location.reload();
                }, 2000);
                return;
            }
        }
    };
}

function swapTurns() {
    circleTurn = !circleTurn;
}

let playerWon = function () {
    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
        return true;
    } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
        return true;
    } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
        return true;
    } else if (cells[8].textContent == "X" && cells[2].textContent == "X" && cells[5].textContent == "X") {
        return true;
    } else if (cells[8].textContent == "X" && cells[6].textContent == "X" && cells[7].textContent == "X") {
        return true;
    } else if (cells[4].textContent == "X" && cells[2].textContent == "X" && cells[6].textContent == "X") {
        return true;
    } else if (cells[4].textContent == "X" && cells[1].textContent == "X" && cells[7].textContent == "X") {
        return true;
    } else if (cells[4].textContent == "X" && cells[3].textContent == "X" && cells[5].textContent == "X") {
        return true;
    } else if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
        return true;
    } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
        return true;
    } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
        return true;
    } else if (cells[8].textContent == "O" && cells[2].textContent == "O" && cells[5].textContent == "O") {
        return true;
    } else if (cells[8].textContent == "O" && cells[6].textContent == "O" && cells[7].textContent == "O") {
        return true;
    } else if (cells[4].textContent == "O" && cells[2].textContent == "O" && cells[6].textContent == "O") {
        return true;
    } else if (cells[4].textContent == "O" && cells[1].textContent == "O" && cells[7].textContent == "O") {
        return true;
    } else if (cells[4].textContent == "O" && cells[3].textContent == "O" && cells[5].textContent == "O") {
        return true;
    } else {
        return false;
    }
};

let playerDraw = function () {
    if (draw === 9) {
        return true;
    }
};