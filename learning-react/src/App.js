import React from "react"
import Todoitem from "./components/Todoitem"
import todosData from "./components/todosData"

import "./style.css"

function App(){
    const todoItems = todosData.map(item => <Todoitem key={item.id} item={item}/>)
    return(
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App;