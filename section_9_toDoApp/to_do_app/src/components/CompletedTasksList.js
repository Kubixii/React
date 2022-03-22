import React from 'react'
import Task from './Task'
import './TasksList.css'

const CompletedTaskList = props => {
    const filteredList = props.tasks.filter(task => {
        return task.completed
    })
    const list = filteredList.map((task, index) => {
        return <Task
            key={index}
            taskCompleted={props.taskCompleted}
            deleteTask={props.deleteTask}
            task={task.task}
            dueDate={task.dueDate}
            isImportant={task.isImportant}
            id={task.id}
            isCompleted={task.completed}
            completedOn={task.completedOn}
            daysLeft={null}
        />
    })
    return (
        <>
            <div id="completedTasksList">
                <h1>Wykonane zadania ({list.length})</h1>
                {list.slice(0, 5)}
            </div>
        </>
    )
}

export default CompletedTaskList