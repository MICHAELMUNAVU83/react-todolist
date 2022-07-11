import React, { Component } from "react";
import { FaTrash } from "react-icons/fa"
export class TodoItem extends Component {
    
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <div key ={todo.id}>
          <input onChange = {()=>this.props.handleclick(todo.id)} type="checkbox" checked = {todo.completed} /> <button onClick = {()=>this.props.delTodo(todo.id)}> <FaTrash/> </button>  {todo.title} 
          </div>
        ))}
      </div>
    );
  }
}

export default TodoItem;
