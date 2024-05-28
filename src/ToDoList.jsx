import { useState } from "react"

export default function ToDoList() {
    const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
    const [newTasks, setNewTasks] = useState("");

    function HandleInputChange(event){
        setNewTasks(event.target.value);
    }

    function AddTask(){
        setTasks(t => [...t, newTasks]);
        setNewTasks("");
    }

    function RemoveTask(index){
        const updateTask = tasks.filter((_, i) => i !== index);

        setTasks(updateTask);
    }

    function MoveTaskUp(index){
       if (index > 0){
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index - 1]] =
         [updateTasks[index - 1], updateTasks[index]];
         setTasks(updateTasks);
       }
    }

    function MoveTaskDown(index){

    }


    return(
        <div>
            <h1>To-Do List</h1>
            <div className="input-container">
                <input type="text" 
                placeholder="Enter Tasks..." 
                value={newTasks} 
                onChange={HandleInputChange}/>
                <button className="add-button" onClick={AddTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li>
                    <span className="text">
                        {task}
                    </span>
                    <button className="delete-task" onClick={() => RemoveTask(index)}>
                        delete
                    </button>
                    <button className="move-task-up" onClick={() => MoveTaskUp(index)}>
                        up
                    </button>
                    <button className="move-task-down" onClick={MoveTaskDown(index)}>
                        down
                    </button>
                </li>
            )}
            </ol>
        </div>
    )
}