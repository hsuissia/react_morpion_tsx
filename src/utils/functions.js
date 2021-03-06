export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {'gagnant': squares[a], 'comboGagnant': lines[i]};
      }
    }
    return {'gagnant': null, comboGagnant: []};
  }

export function squareToPosition(i) {
  const position = [
    "(Col: 1, Ligne: 1)",
    "(Col: 1, Ligne: 2)",
    "(Col: 1, Ligne: 3)",
    "(Col: 2, Ligne: 1)",
    "(Col: 2, Ligne: 2)",
    "(Col: 2, Ligne: 3)",
    "(Col: 3, Ligne: 1)",
    "(Col: 3, Ligne: 2)",
    "(Col: 3, Ligne: 3)",
]

    return position[i];
}