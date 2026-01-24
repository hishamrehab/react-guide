const initalGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null]
]

 const GameBoard = ({ onSelectSquare  , turns }) => {
   let gameBoard = initalGameBoard;
 
   for(const turn of turns) {
    const { square , player} = turn;
    const {row , col} = square;

    gameBoard[row][col] = player;
   }

  
  return (
    <ol id="game-board">
        {gameBoard.map((row , rowIndex) => 
             <li key={rowIndex}>
            <ol>  
                 {
            <ol>
                {row.map((playerSymbol , colIndex) => <li key={colIndex}>
                <button key={colIndex}
                 onClick={() => onSelectSquare(rowIndex , colIndex)}
                 disabled={playerSymbol !== null}
                >{playerSymbol}</button>
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