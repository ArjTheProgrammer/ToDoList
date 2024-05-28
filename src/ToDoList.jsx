import { useState } from "react"

export default function ToDoList() {
    const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
    const [newTasks, setNewTasks] = useState("");

    function HandleInputChange(event){
        setNewTasks(event.target.value);
    }
    return(
        <div>
            <h1>To-Do List</h1>
            <div className="input-container">
                <input type="text" 
                placeholder="Enter Tasks..." 
                value={newTasks} 
                onChange={HandleInputChange}/>
                <button className="add-button">Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li>
                    <span className="text">
                        {task}
                    </span>
                    <button className="delete-task">
                        delete
                    </button>
                    <button className="move-task-up">
                        up
                    </button>
                    <button className="move-task-down">
                        down
                    </button>
                </li>
            )}
            </ol>
        </div>
    )
}