// Function for creating a game board 
function createBoard(containerId, initialState = null) {
    const container = document.getElementById(containerId);
    const board = document.createElement('div');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(8, 1fr)';
    board.style.gap = '2px';
    board.style.width = '400px';
    board.style.margin = '20px auto';

    for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const disc = document.createElement('div');
        disc.classList.add('disc');
        cell.appendChild(disc);
        board.appendChild(cell);
    }

    container.appendChild(board);

    if (initialState) {
        updateBoard(containerId, initialState);
    }