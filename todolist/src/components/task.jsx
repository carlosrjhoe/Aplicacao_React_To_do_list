import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor(){
    super();
    this.state = {
      hasFinished: false,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event){
    this.setState({
      hasFinished: event.target.checked,
    });
  }

  render() {
    const { hasFinished } = this.state;
    const { data, onRemove } = this.props;
    const { id, title } = data;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckbox} checked={hasFinished}/>
        { title }
        <button type='button' onClick={() => onRemove(id)} >remover</button>
      </div>
    )
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onRemove: PropTypes.func,
}.isRequired;