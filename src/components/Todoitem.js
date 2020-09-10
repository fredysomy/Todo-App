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
                paddingBottom:'0.5%',
                 
            }
        }
        else{
            return{
                textDecoration:'line-through',
                 border:'1px black solid',
                 borderRadius:'5%',
                 paddingTop: '0.5%',
                 paddingBottom:'0.5%',
                 
            }
        }
    }
   
    render() {
        const {id,stat,todo}=this.props.items;
        return (
            <div className="divstyle">
               
        <p style={this.getstyle()}>
            <img style={thisstyle}width="24px" height="16px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaVyyG0k3Hgu46RWjryA6oL06e4rtW0I7yVA&usqp=CAU"></img>
           {' '}{todo}
            <img width="18px" height="18px" src="https://w0.pngwave.com/png/838/907/computer-software-monotype-imaging-typeface-computer-icons-font-dustbin-png-clip-art.png" style={btnstyle} onClick={this.props.deltodo.bind(this,id)}></img>{' '}
           <img width="18px" height="18px" src="https://e7.pngegg.com/pngimages/886/963/png-clipart-check-mark-computer-icons-wrong-miscellaneous-angle.png" style={donestyle} onClick={this.props.markcomplete.bind(this,id)}></img>
             
            
            </p>
            
            </div>
        )
    }
}
const btnstyle={
marginTop:'2px',
    background:'#c5eaf0',
    float:'right',
    marginRight:'5px',
    
   
}
const donestyle={
    background:'#c5eaf0',
   marginRight:'10px',
    float:'right',
    marginTop:'2px'

}
const thisstyle={
    marginTop:'4px'
}

export default Todoitem
