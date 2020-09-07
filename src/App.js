import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos';

class App extends Component{
     state={
    todos:[
        {
        id:1,
        todo:"---HI"
    },
    {
        id:2,
        todo:"---WOW"
    },
    {
        id:3,
        todo:"---GREAT"
    }]
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
