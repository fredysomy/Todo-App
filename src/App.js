import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos';

class App extends Component{
     state={
    todos:[
        {
        id:1,
        stat:true,
        todo:"LEARN REACT"
    },
    {
        id:2,
        stat:true,
        todo:"LEARN NODE JS"
    },
    {
        id:3,
        stat:true,
        todo:"LEARN EXPRESS JS"
    },{
        id:4,
        stat:true,
        todo:"LEARN DJANGO FRAMEWORK"
    },{
        id:5,
        stat:true,
        todo:"LEARN PHP FRAMEWORKS"
    },{
        id:6,
        stat:true,
        todo:"COMPLETE THIS APPLICATION"
    }
]
}
 markcomplete=(id)=>{
        this.setState({todos: this.state.todos.map(todo=>{
            if(todo.id===id) {
                todo.stat = !todo.stat
            }
            return todo;
        })});
    }
    deltodo=(id)=>{
            this.setState({todos : [...this.state.todos.filter(todo=> todo.id!==id)]});
    }
    render(){
        return(
            <div>
            <h1 className="App" align="center">TODOS LIST</h1>
            
            <Todos todos={this.state.todos} markcomplete={this.markcomplete} deltodo={this.deltodo} />
            </div>
        )
    }
}

export default App;
