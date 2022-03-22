import React from 'react'
import "./ToDoAppForm.css"

const ToDoAppForm = props => {
    const errorMessages = {
        task: "Treść nie może być pusta",
        dueDate: "Data jest pusta lub wcześniejsza niż obecna"
    }
    return (
        <div id="form">
            <form onSubmit={props.formSubmitHandler}>
                <div className="formInput">
                    <input type="text" name="task" id="task" placeholder="Wpisz treść zadania" onChange={props.controlledFormHandler} value={props.task} />
                    {props.formErrors.task ? <span>{errorMessages.task}</span> : null}
                </div>
                <div className="formInput">
                    <input type="checkbox" name="isImportant" id="isImportant" onChange={props.controlledFormHandler} checked={props.isImportant} />
                    <label htmlFor="isImportant">Czy priorytetowe</label>
                </div>
                <div className="formInput">
                    <label htmlFor="dueDate">Planowana data ukończenia: </label><br />
                    <input type="date" name="dueDate" id="dueDate" onChange={props.controlledFormHandler} value={props.dueDate} min={new Date().toISOString().slice(0, 10)} />
                    {props.formErrors.dueDate ? <span>{errorMessages.dueDate}</span> : null}
                </div>
                <div className="formInput">
                    <input type="submit" value="Dodaj Zadanie" />
                </div>
            </form>
        </div>
    )
}

export default ToDoAppForm