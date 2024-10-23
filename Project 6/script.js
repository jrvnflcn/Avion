const boardElement = document.getElementById('board');
const winnerPopup = document.getElementById('winner-popup');
const winnerMessage = document.getElementById('winner-message');
const restartBtn = document.getElementById('restart-btn');
const undoBtn = document.getElementById('undo-btn');
const redoBtn = document.getElementById('redo-btn');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let movesHistory = [];
let redoHistory = [];
let gameActive = true;

function createBoard() {
  boardElement.innerHTML = '';
  board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.setAttribute('data-index', index);
    cellElement.innerText = cell;
    cellElement.addEventListener('click', handleCellClick);
    boardElement.appendChild(cellElement);
  });
}

function handleCellClick(event) {
  const index = event.target.getAttribute('data-index');
  if (board[index] !== '' || !gameActive) return;

  makeMove(index);
}

function makeMove(index) {
  board[index] = currentPlayer;
  movesHistory.push([...board]);
  redoHistory = []; 
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  createBoard();
  checkWinner();
}

undoBtn.addEventListener('click', () => {
  if (movesHistory.length > 1) {
    redoHistory.push(movesHistory.pop());
    board = movesHistory[movesHistory.length - 1];
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    createBoard();
  }
});

redoBtn.addEventListener('click', () => {
  if (redoHistory.length > 0) {
    movesHistory.push(redoHistory.pop());
    board = movesHistory[movesHistory.length - 1];
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    createBoard();
  }
});

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      announceWinner(board[a]);
      gameActive = false;
      return;
    }
  }

  if (!board.includes('')) {
    announceWinner('Draw');
  }
}

function announceWinner(winner) {
  winnerMessage.innerText = winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`;
  winnerPopup.style.display = 'flex';
  startConfetti(); 
}

restartBtn.addEventListener('click', () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  movesHistory = [];
  redoHistory = [];
  gameActive = true;
  createBoard();
  winnerPopup.style.display = 'none';
  stopConfetti(); 
});

createBoard();