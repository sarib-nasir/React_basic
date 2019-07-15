import React ,{Component} from "react";
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component{
    render(){
        // console.log(this.props.todos);
        
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} markComplete= {this.props.markComplete} delTodo= {this.props.delTodo} />
            
        ));
    }
}

//propTpyes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}
export default Todos;