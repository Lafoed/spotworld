import React from 'react'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component{
    style={
        header:{
            // maxHeight: "120px",
            // height: "auto",
            position: "fixed",
            // width: "100%",
            // top: "0px",
            // padding:"0 12px",
            // background:"white",
            // zIndex:100
        }

    }

    newsBtn=()=>{
        this.props.actions.toggleView('menu');
    }

    render(){
        return (
            <AppBar style={this.style.header} onLeftIconButtonTouchTap={this.newsBtn}>
                {this.props.children.map( (child,i)=>(child
                ))}
            </AppBar>
        )
    }
}