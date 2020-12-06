import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component{
     state={
    todos:[]
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
            this.setState({todos : this.state.todos.filter(todo=> todo.id!==id)});
    }
    addTodo=(title)=>{
        const newtodo={
            id:this.state.todos.length+2,
            todo:title,
            stat:true
        }
       this.setState({todos : [...this.state.todos,newtodo]})
    }
    componentWillMount() {
    let list=localStorage.getItem('todoapp');
    if(list){
        this.setState({
        todos: JSON.parse(localStorage.getItem('todoapp'))
      })
    }
}
componentDidUpdate() {
    localStorage.setItem('todoapp', JSON.stringify(this.state.todos))
}
    render(){
        return(
            <div>
            <h1 className="App" align="center">TODOS LISDT</h1>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markcomplete={this.markcomplete} deltodo={this.deltodo} />
            
            </div>
            
        )
    }
}


export default App;
