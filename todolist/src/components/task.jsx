import React, { Component } from 'react'

class task extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="checkbox" />
        nome da task
        <button type='button'>remover</button>
      </div>
    )
  }
}
export default task;