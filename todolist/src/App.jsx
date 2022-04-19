import React, { Component } from 'react';
import Addtask from './components/Addtask';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
    };
  }

  createTask(newTask){
    const {tasks} = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    })
  }

  render(){
    return (
      <Addtask onCreate={this.createTask}/>
    );
  }
}

export default App;
