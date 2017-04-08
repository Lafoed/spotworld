import React from 'react'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default class Header extends React.Component{
    style={
        header:{
            maxHeight: "120px",
            height: "auto",
            position: "absolute",
            width: "100%",
            top: "0px",
            padding:"0 12px",
            background:"white"
        }
    }
    render(){
        return (
            <Toolbar style={this.style.header}>
                {this.props.children.map( (child,i)=>(
                    <ToolbarGroup key={i}>{child}</ToolbarGroup>
                ))}
            </Toolbar>
        )
    }
}