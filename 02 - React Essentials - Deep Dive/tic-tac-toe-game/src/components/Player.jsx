import { useState } from "react"

export default function Player({initialName , symbol , isActive , onChangeName }) {
   const [playerName , setPlayerName ] = useState(initialName);
   const [isEditing , setIsEditing ] =  useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
   
    if(isEditing) {
      onChangeName(symbol , playerName);
    }
  }

  function handleChnage(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editiplePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editiplePlayerName = 
    <input 
     type="text"
     required
     value={playerName}
     onChange={handleChnage}  
     />
  }
 

    return (
      <li className={isActive ? "active" : undefined}> 
      <span className="player">
        {editiplePlayerName}  
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    )
} 