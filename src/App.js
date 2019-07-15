import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  /*state = {
    todos:[
      {
        id:uuid.v4(),
        title:'take out the trash',
        completed: false
      },
      {
        id:uuid.v4(),
        title:'take out the stuff',
        completed: false
      },
      {
        id:uuid.v4(),
        title:'take out the computer',
        completed: true
      }
    ]
  }*/
  state = {
    todos:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
  }

  //toggleComplete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo =>{
      if (todo.id=== id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  // delete todo
  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}))
   
  }
  //add todo
  addTodo = (title) =>{
    /*const newTodo ={
      id:uuid.v4(),
      title,
      completed:false
    }*/
    axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
    .then(res=> this.setState({todos:[...this.state.todos,res.data]}))
    
  }
  render(){
    //console.log(this.state.todos);
    
    return (
      <Router>
        <div className = "App">
            <Header/>
          <div className="container">
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
