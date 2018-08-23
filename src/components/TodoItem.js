import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(){
        super();
    }

    render() {
        const todo = this.props.todo;
        return (
          <li> <strong>{this.props.id + 1} {todo.title}</strong> - {todo.completed ? 'completed' : 'todo'} </li>
        );
      }
}
export default TodoItem;