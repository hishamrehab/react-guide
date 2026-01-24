import { useState } from "react"

export default function Player({initialName , symbol}) {
   const [playerName , setPlayerName ] = useState(initialName);
   const [isEditing , setIsEditing ] =  useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
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
      <li>
      <span className="player">
        {editiplePlayerName}  
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    )
} 