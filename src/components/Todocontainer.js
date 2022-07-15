import React, { Component } from "react";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export class Todocontainer extends Component {
    state = {
        todos: [ 
        ],
      };
     
    handleclicked = (id)=>{
        this.setState({
            todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            })
          });
        
    }

    delTodo = (id)=>{
        this.setState({
            todos: [
              ...this.state.todos.filter(todo => {
                return todo.id !== id;
              })
            ]
          });
    }
    addTodoItem = title => {
        const newTodo = {
            id:uuidv4(),
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          }
          );
          localStorage.setItem("myItem", JSON.stringify(this.state.todos))
          
    };
   
  
  render() {
    
    return (
      <div>
          < InputTodo addTodoItem= {this.addTodoItem} />
        <TodoItem delTodo= {this.delTodo} handleclick = {this.handleclicked} todos={this.state.todos} />
      </div>
    );
  }
}

export default Todocontainer;
