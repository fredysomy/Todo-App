import React, { Component } from 'react'

export class Todoitem extends Component {
    getstyle = ()=>{
        if(this.props.items.stat){
            return{
                backgroundColor:'red'
            }
        }
        else{
            return{
                backgroundColor:'blue'
            }
        }
    }
    render() {
        return (
            <div>
               
        <p style={this.getstyle()}>{this.props.items.todo}</p>
            </div>
        )
    }
}

export default Todoitem
