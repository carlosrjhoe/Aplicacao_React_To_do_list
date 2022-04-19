import React, { Component } from 'react';

export default class Addtask extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  // Funções
  handleInput(event){
    this.setState({
      title: event.target.value,
    })
  }

  render() {
    const { title } = this.state;
    const { onCreate } = this.props;
    return (
      <form onSubmit={() => onCreate(this.state) }>
        <input type="text" value={title} onChange={this.handleInput}/>
        <button type='submit'>Adicionar Tarefa</button>
      </form>
    )
  }
}