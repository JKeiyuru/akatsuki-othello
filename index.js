const initialBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

const sampleMoves = [
    { row: 3, col: 2, player: 1, explanation: "Black places a disc at D3, outflanking White's disc at D4. The White disc is flipped to Black." },
    { row: 2, col: 4, player: 2, explanation: "White responds by placing a disc at E3, outflanking Black's disc at E4. The Black disc is flipped to White." },
    { row: 2, col: 3, player: 1, explanation: "Black places a disc at D3, outflanking White's disc at D4. This move creates a diagonal line of Black discs." },
    { row: 4, col: 2, player: 2, explanation: "White places a disc at C5, outflanking Black's disc at D4. This move flips two Black discs to White." },
    { row: 5, col: 3, player: 1, explanation: "Black places a disc at D6, outflanking White's disc at D5. This move strengthens Black's position on the left side of the board." }
    // Add more moves as needed
];
