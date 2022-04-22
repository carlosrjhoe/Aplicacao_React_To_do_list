import React, { Component } from 'react';
import Addtask from './components/Addtask';
import Task from './components/Task';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  createTask(newTask){
    const {tasks} = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  updateTask(updatedTask){
    const { tasks } = this.state;
     const updatedtasks = tasks.map((task) => {
      if(task.id === this.updateTask.id){
        task.hasFinished = this.updateTask.hasFinished
      }
      return task;
    });
    this.setState({
      tasks: updatedtasks,
    });
  }

  removeTask(id){
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    })
  }

  render(){
    const {tasks} = this.state;
    return (
      <>
        <Addtask onCreate={this.createTask} />
        { tasks.map((task) => (
          <Task 
            key={task.id} 
            data={task}
            onUpdate={this.updateTask}
            onRemove={this.removeTask}
          />
        ))}
      </>
    )
  }
}

export default App;
