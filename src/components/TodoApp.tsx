import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddClick = () => {
        if(newTask.trim() === '') return
        setTaskList(lastTask => [...lastTask, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index:number) => {
        setTaskList(tasks => tasks.filter((_, i) => i !== index))

    }
  return (
    <div>
        
    <h1>List Task</h1>
    <div>
        <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="enter new task..."/>

        <button onClick={handleAddClick}>Add Task</button>

    </div>

    <TaskList tasklist={taskList} deleteTask={handleDeleteTask}></TaskList>

    </div>
   
  )
}