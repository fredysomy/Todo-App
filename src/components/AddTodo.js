import React, { Component } from 'react'

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
            <div style={{textAlign:'center'}}>
          <form onSubmit={this.onSubmit}>
            <input style={{textAlign:'center'}}
                     placeholder="Enter your To-Do's" 
                     type="text" 
                     name="name"
                     value={this.state.title} 
                     onChange={this.titChange}/>
          
            <input
             
            type="submit"
             value="Submit" />
            </form>
         </div>
        )
    }
}

export default AddTodo
