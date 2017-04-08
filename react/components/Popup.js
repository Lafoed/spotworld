import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';


export default class Popup extends React.Component {
    state = {
        open: false,
    };
    style = {
        body:{},
        popup:{},
        modules:{
            marginTop:"20px"
        },
        title:{
            block:"none"
        },
        actionContainer:{
            borderTop:"none",
            marginTop:"-30px"
        }
    }

    handleClose = () => {
        this.props.closePopup();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
                <Dialog
                    titleStyle={this.style.title}
                    actionsContainerStyle={this.style.actionContainer}
                    actions={actions}
                    modal={false}
                    open={!!this.props.popup}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <Paper style={this.style.modules}>modules</Paper>
                    <Paper style={this.style.modules}>modules</Paper>
                    <Paper style={this.style.modules}>modules</Paper>
                </Dialog>
        );
    }
}




