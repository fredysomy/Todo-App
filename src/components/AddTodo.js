import React, { Component } from 'react';
import todoitem from './todoitem.css';

export class AddTodo extends Component {
    state={
        title:''
    }
    titChange=(e)=>{
        this.setState({title: e.target.value})
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
            <div className="inputtodo">
          <form onSubmit={this.onSubmit}>
            <input
                     placeholder="Enter your To-Do's" 
                     type="text" 
                     name="name"
                     className="i"
                     value={this.state.title} 
                     onChange={this.titChange}/>
          
            <input
             className="btn"
            type="submit"
             value="Add" />
            </form>
         </div>
        )
    }
}

export default AddTodo
