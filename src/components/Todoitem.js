import React, { Component } from 'react'

export class Todoitem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.items.id}</p>
        <p>{this.props.items.todo}</p>
            </div>
        )
    }
}

export default Todoitem
