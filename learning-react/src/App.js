import React from "react"
import Todoitem from "./components/Todoitem"
import todosData from "./components/todosData"

import "./style.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render() {
        const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item}/>)
        return(
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
    
}

export default App;