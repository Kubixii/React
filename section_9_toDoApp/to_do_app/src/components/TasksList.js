import React from 'react'
import "./TasksList.css"
import Task from './Task'

const TasksList = props => {
    const copiedList = [...props.tasks]
    const Sortedlist = copiedList.sort((task1, task2) => {
        if (task1.task < task2.task) {
            return -1
        }
        return 0
    })
    const list = Sortedlist.map((task, index) => {
        if (!task.completed) {
            const dateStringToArray = task.dueDate.split(".")
            const daysInNumber = new Date(`${dateStringToArray[2]}.${dateStringToArray[1]}.${dateStringToArray[0]}`) - new Date()
            const daysLeft = Math.ceil(daysInNumber / (1000 * 3600 * 24))
            return <Task
                key={index}
                taskCompleted={props.taskCompleted}
                deleteTask={props.deleteTask}
                task={task.task}
                dueDate={task.dueDate}
                isImportant={task.isImportant}
                id={task.id}
                isCompleted={task.completed}
                daysLeft={daysLeft}
            />
        }
        return null
    })

    return (
        <div id="TasksList">
            <h1>Zadania do wykonania</h1>
            {list}
        </div>
    )
}

export default TasksList