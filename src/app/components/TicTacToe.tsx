"use client";

import { useState } from "react";

type Square = "X" | "O" | null;

function calculateWinner(squares: Square[]): Square {
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
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [gameStarted, setGameStarted] = useState(false);
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  function handleClick(i: number) {
    if (!gameStarted || squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  }

  let status;
  if (winner) {
    status = `Gagnant: ${winner}`;
  } else if (isDraw) {
    status = "Match nul!";
  } else {
    status = gameStarted
      ? `Joueur suivant: ${xIsNext ? "X" : "O"}`
      : "Appuyez sur 'Commencer' pour jouer";
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold mb-4">Tic Tac Toe</h2>

      {!gameStarted ? (
        <button
          onClick={() => setGameStarted(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Commencer
        </button>
      ) : (
        <>
          <div className="text-xl mb-4">{status}</div>
          <div className="grid grid-cols-3 gap-2">
            {squares.map((square, i) => (
              <button
                key={i}
                className="w-20 h-20 bg-gray-100 text-3xl font-bold border border-gray-300 hover:bg-gray-200 transition"
                onClick={() => handleClick(i)}
              >
                {square}
              </button>
            ))}
          </div>
          <button
            onClick={resetGame}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Jouer Encore
          </button>
        </>
      )}
    </div>
  );
}
