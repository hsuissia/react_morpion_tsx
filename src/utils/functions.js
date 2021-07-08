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
        return squares[a];
      }
    }
    return null;
  }

export function squareToPosition(i) {
    const position = [
        "(1,1)",
        "(1,2)",
        "(1,3)",
        "(2,1)",
        "(2,2)",
        "(2,3)",
        "(3,1)",
        "(3,2)",
        "(3,3)",
    ]

    return position[i];
}