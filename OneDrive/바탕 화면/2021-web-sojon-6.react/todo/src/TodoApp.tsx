import { stringify } from "querystring";
import React from "react";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  todoItems1: string[];
  newTodo: string;
  newTodo1: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      todoItems1: [],
      newTodo: "",
      newTodo1: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleNewTodo1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo1: e.target.value,
    })
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }
  
  handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items1 = this.state.todoItems1.concat(this.state.newTodo1)

    this.setState({
      todoItems1: items1,
      newTodo1: "",
    })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br/>
          <button>check +{this.state.todoItems.length + 1}</button>
        </form>
        

        <h3>계획표</h3>
        <form onSubmit={this.handleSubmit1}>
        <label htmlFor="new-todo">무슨 시간인가요?</label> <br/>
          <input type="text" id="new-todo" value={this.state.newTodo1} onChange={this.handleNewTodo1} /> <br/>
          <button>check +{this.state.todoItems1.length + 1}</button> <br/>
        </form>
        <h3>시간표</h3>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem number = {this.state.todoItems.length} name={item} key={idx}/>
          ))
        }
        <h3>일정</h3>
        {
          this.state.todoItems1.map((item1, idx) => (
            <TodoItem number = {this.state.todoItems1.length} name={item1} key={idx}/>
          ))
        }
      </div>
    )
  }
}

export default TodoApp;