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
}

    // This function will update the board state so that wherever the disc is placed, it will be displayed
    function updateBoard(containerId, state) {
        const container = document.getElementById(containerId);
        const cells = container.querySelectorAll('.cell');
        state.forEach((row, i) => {
            row.forEach((cell, j) => {
                const disc = cells[i * 8 + j].querySelector('.disc');
                disc.className = 'disc';
                if (cell === 'B') disc.classList.add('black');
                if (cell === 'W') disc.classList.add('white');
            });
        });
    }
    
    // Initial board state
    const initialState = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];


    // Sample game states for the game tutorial.
const sampleGameStates = [
    // Initial state (We call the initial state array (board))
    initialState,
    // Step 1: Black places a disc
    
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', 'B', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ], 
    // Step 2: White places a disc
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'B', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    // Step 3: Black places another disc
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    // Step 4: White places a disc
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '],
        [' ', ' ', 'W', 'W', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],

    // step 5: Black places another disc
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '],
        [' ', ' ', 'W', 'W', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]

    // We can add more moves as need arises
];

//HERE

let currentStep = 0;

// This function will be for initializing the game
function initGame() {
    createBoard('initial-board', initialState);
    createBoard('sample-board', sampleGameStates[0]);

    const prevButton = document.getElementById('prev-move');
    const nextButton = document.getElementById('next-move');

    prevButton.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateBoard('sample-board', sampleGameStates[currentStep]);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentStep < sampleGameStates.length - 1) {
            currentStep++;
            updateBoard('sample-board', sampleGameStates[currentStep]);
        }
    });
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGame);