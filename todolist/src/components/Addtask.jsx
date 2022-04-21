import React, { Component } from 'react';
import generators from '../lib/generators';

class Addtask extends Component {
  constructor(){
    super();

    this.initialState = {
      id: 0,
      title: '',
    };


    this.state = this.initialState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
  }

  // Funções
  handleInput(event){
    const { randomId } = generators;
    this.setState({
      id: randomId(999999999999),
      title: event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const { onCreate } = this.props;
    const { id } = this.state;
    if(id > 0){
      onCreate(this.state)
      this.setState(this.initialState);
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={title} onChange={this.handleInput}/>
        <button type='submit'>Adicionar Tarefa</button>
      </form>
    )
  }
}

export default Addtask;