import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa"

export class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = e => {
    this.setState({
      title: e.target.value
    });
   
  };
  onSubmit = (e)=>{
      e.preventDefault();
      this.props.addTodoItem(this.state.title)
      this.setState({
        title: ""
      });
     
     
      
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <input
            onChange={this.onChange}
            placeholder="add task"
            value={this.state.title}
          />
          <button type ="submit"><FaPlusCircle/> </button>
        </form>
      </div>
    );
  }
}

export default InputTodo;
