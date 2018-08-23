import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    constructor() {
        super();
    }


    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(
                (todo, i) => { console.log(i); return (<TodoItem key={i} id={i} todo={todo} />)}
            )
        }
        return (
            <div className=''>
                <br />
                My Todos (from json placeholder)
                {todoItems}
          </div>
        );
    }
}
export default Todos;