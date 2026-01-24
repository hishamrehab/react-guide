import { useState } from "react"

const initalGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null]
]

const GameBoard = () => {
  const [gameBoard , setGameBoard] = useState(initalGameBoard);

   function handleSelectSquare(rowIndex , colIndex) {
    setGameBoard((prevGameBoard) =>  {
        const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
        updateBoard[rowIndex][colIndex] = "X";
        return updateBoard
    });
   }
  



  return (
    <ol id="game-board">
        {gameBoard.map((row , rowIndex) =>
             <li key={rowIndex}>
            <ol>  
                {
            <ol>
                {row.map((playerSymbol , colIndex) => <li key={colIndex}>
                <button key={colIndex} onClick={() => handleSelectSquare(rowIndex , colIndex)}>{playerSymbol}</button>
                </li>
                )}
            </ol>
                }
            </ol>
        </li>)}
    </ol>
  )
} 

export default GameBoard