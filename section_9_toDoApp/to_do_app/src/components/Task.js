import React from 'react'
import './Task.css'

const Task = props => {
    const { taskCompleted, deleteTask, task, dueDate, isImportant, id, isCompleted, completedOn, daysLeft } = props
    return (
        <div className="task">
            <p>
                <span className={isImportant ? "important" : null}><span className={daysLeft < 4 && !isCompleted ? "closeToDueDate" : null}>{task}</span> </span>
                do:
                {dueDate} {daysLeft === null ? null :
                    <span>
                        ({daysLeft} {daysLeft === 1 ? <>dzień</> : <>dni</>})
                    </span>}
            </p>
            {isCompleted ? <span>Ukończone dnia: {completedOn}</span> : <button onClick={() => taskCompleted(id)}> Wykonane</button>}
            <button onClick={() => deleteTask(id)}>X</button>
        </div>
    )
}

export default Task