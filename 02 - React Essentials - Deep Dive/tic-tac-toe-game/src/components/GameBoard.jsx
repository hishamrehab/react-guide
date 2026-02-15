
 const GameBoard = ({ onSelectSquare  , board }) => {
  
  
  return (
    <ol id="game-board">
        {board.map((row , rowIndex) => 
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