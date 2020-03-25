import React from "react";
import Todoitem from "./Todoitem"

function MainContent(){
    return(
        <div className= "todo-list">
            {/* <input type="checkbox" />
            <p>Placeholder</p> */}
            <Todoitem />
            <Todoitem />
            <Todoitem />
            <Todoitem />
        </div>
    )
}

export default MainContent;