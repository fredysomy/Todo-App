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
        stat:false,
        todo:"LEARN NODE JS"
    },
    {
        id:3,
        stat:false,
        todo:"LEARN EXPRESS JS"
    },{
        id:4,
        stat:true,
        todo:"LEARN DJANGO FRAMEWORK"
    },{
        id:5,
        stat:false,
        todo:"LEARN PHP FRAMEWORKS"
    },{
        id:6,
        stat:true,
        todo:"COMPLETE THIS APPLICATION"
    }
]
}
    render(){
        return(
            <div>
            <h1 className="App" align="center">TODOS LIST</h1>
            <h3>This is your todos</h3>
            <Todos todos={this.state.todos} />
            </div>
        )
    }
}

export default App;
