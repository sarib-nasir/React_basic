import React ,{Component} from "react";
import propTypes from 'prop-types';


class TodoItem extends Component{
    getStyle = () => {
        /*if(this.props.todo.completed){
            return{
                textDecoration:'line-through'
            }
        }else{
            return{
                textDecoration:'none'
            }
        }*/
        return{
            backgroundColor:'#555',
            padding:'10px',
            borderBottom:'1px #ccc solid',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete(e)  {
    //     console.log(this.props);
        
    // } throws error

    
    render(){
        const { id,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this,id)} style ={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}
const btnStyle={
    backgroundColor:'#f44336',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    coursor:'pointer',
    float:'right'
}

// const itemStyle = {
//     backgroundColor:'#333'
// }

//propTpyes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}
export default TodoItem;