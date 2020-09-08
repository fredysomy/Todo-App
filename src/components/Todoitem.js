import React, { Component } from 'react'
import todoitem from './todoitem.css'
export class Todoitem extends Component {
    getstyle = ()=>{
        if(this.props.items.stat){
            return{
                textDecoration:'none',
                border:'1px black solid',
                borderRadius:'5%',
                paddingTop: '0.5%',
                paddingBottom:'0.5%'
            }
        }
        else{
            return{
                textDecoration:'line-through',
                 border:'1px black solid',
                 borderRadius:'5%',
                 paddingTop: '0.5%',
                 paddingBottom:'0.5%'
            }
        }
    }
   
    render() {
        const {id,stat,todo}=this.props.items;
        return (
            <div className="divstyle">
               
        <p style={this.getstyle()}>
            <button onClick={this.props.markcomplete.bind(this,id)}>Done</button>{' '}
            {todo}
            <button style={btnstyle} onClick={this.props.deltodo.bind(this,id)}>X</button>
            </p>
            
            </div>
        )
    }
}
const btnstyle={
    background:'#c5eaf0',
    borderRadius:'50%',
    float:'right',paddingRight:'7px',paddingTop:'2px',
    marginRight:'5px'
}

export default Todoitem
