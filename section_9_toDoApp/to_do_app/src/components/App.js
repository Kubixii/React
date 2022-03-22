import React, { Component } from 'react';
import './App.css';
import ToDoAppForm from './ToDoAppForm';
import TasksList from './TasksList';
import CompletedTaskList from './CompletedTasksList';

class App extends Component {
  state = {
    task: "",
    isImportant: false,
    dueDate: "",
    formErrors: {
      task: false,
      dueDate: false
    },
    tasks: []
  }

  render() {
    const { task, isImportant, dueDate, formErrors } = this.state
    return (
      <>
        <div>
          <button onClick={this.downloadTxtFile}>Download json</button>
          <form onSubmit={this.uploadTxtFile}>
            <input type="file" name="file" id="file" />
            <button type="submit">upload json</button>
          </form>
        </div>
        <ToDoAppForm
          formSubmitHandler={this.formSubmitHandler.bind(this)}
          controlledFormHandler={this.controlledFormHandler.bind(this)}
          task={task}
          isImportant={isImportant}
          dueDate={dueDate}
          formErrors={formErrors}
        />
        <TasksList
          tasks={this.state.tasks}
          taskCompleted={this.taskCompleted.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
        <CompletedTaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask.bind(this)}
        />
      </>
    );
  }

  formSubmitHandler(e) {
    e.preventDefault()
    const today = new Date()
    const task = this.state.task
    const dueDate = new Date(this.state.dueDate)
    const isImportant = this.state.isImportant
    let errorsAmount = 0
    let formErrors = {
      task: false,
      dueDate: false
    }

    if (task === "") {
      errorsAmount++
      formErrors.task = true
    }

    if (dueDate.toString() === "Invalid Date" || dueDate.valueOf() < today.valueOf()) {
      errorsAmount++
      formErrors.dueDate = true
    }

    this.setState({
      formErrors
    })

    if (errorsAmount === 0) {
      let id = 0
      if (this.state.tasks.length !== 0) {
        id = this.state.tasks[this.state.tasks.length - 1].id + 1;
      }
      const newTask = {
        id,
        task,
        isImportant,
        dueDate: dueDate.toLocaleDateString(),
        completed: false,
        completedOn: ""
      }
      this.setState(prevState => {
        return {
          task: "",
          isImportant: false,
          dueDate: "",
          tasks: prevState.tasks.concat(newTask)
        }
      })
    }
  }

  controlledFormHandler(e) {
    const task = e.target.name
    let value = e.target.value
    if (e.target.type === "checkbox") value = e.target.checked
    this.setState({
      [task]: value
    })
  }

  taskCompleted(id) {
    const tasks = this.state.tasks.map(task => {
      let newTask = {
        id: task.id,
        task: task.task,
        isImportant: task.isImportant,
        dueDate: task.dueDate,
        completed: task.completed,
        completedOn: task.completedOn
      }
      if (task.id === id) {
        const date = new Date()
        const string = date.toLocaleDateString() + " " + date.toLocaleTimeString()
        newTask.completed = true
        newTask.completedOn = string
        console.log(newTask.completedOn)
      }
      return newTask
    })

    this.setState({
      tasks
    })
  }

  deleteTask(id) {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })

    this.setState({
      tasks
    })
  }





  downloadTxtFile = () => {
    const element = document.createElement("a");
    const json = this.state.tasks
    const file = new Blob([JSON.stringify(json)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  uploadTxtFile = (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]
    if (file.type === "application/json") {
      const fileReader = new FileReader()
      fileReader.onload = e => {
        const tasks = JSON.parse(e.target.result)
        this.setState({
          tasks
        })
      }
      fileReader.readAsText(e.target.file.files[0])
      e.target.file.value = null
    }
  }
}

export default App;
