import React from 'react'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component{
    style={
        header:{
            position:"absolute",
            left:0,
            top:0,
        },
    }

    newsBtn=()=>{
        this.props.actions.toggleView('menu');
    }

    render(){
        return (
            <AppBar style={this.style.header} iconElementLeft={<div style={{display:"relative"}}></div>}>
                {this.props.children.map( (child,i)=>(child))}
            </AppBar>
        )
    }
}