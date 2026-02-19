import { useState } from "react"
import "../style.css"


const Todo = () => {
  const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");


const handleSubmit = () => {
  if(!input.trim()) return

    setTodos((todos) => {
  return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
     })
    })    
    setInput("");
}

 const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
 


    return (
    <div className="container">
        <input
         type="text" 
         placeholder="New Todo"
         value={input} onChange={(e) => setInput(e.target.value)}
         />

         <button onClick={handleSubmit}>Submit</button>

    <ul className="todos-list">
        {todos.map(({text , id}) => (
            <li key={id} className="todo">
                <span>{text}</span>
                <button className="close"
                 onClick={() => removeTodo(id)}
                >x</button>
            </li>
        ))}
    </ul>
    

    </div>
  )
}

export default Todo