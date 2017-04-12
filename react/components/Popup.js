import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Main from './PopWindows/Main'



export default class Popup extends React.Component {
    state = {
        open: false,
    };
    style = {
        title:{
            block:"none"
        },
        body:{
             padding:"0px"
        },
        actionContainer:{
            borderTop:"none",
            marginTop:"-30px"
        }
    }

    handleClose = () => {
        this.props.uiActions.closePopup();
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
                    bodyStyle={this.style.body}
                    actionsContainerStyle={this.style.actionContainer}
                    actions={actions}
                    modal={false}
                    open={!!this.props.popup}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <Tabs>
                        <Tab label="Main" >
                            <Main {...this.props}/>
                        </Tab>
                        <Tab label="Another" >
                            <div>someinfo</div>
                        </Tab>
                        <Tab label="Else" >
                            <div>someinfo</div>
                        </Tab>
                    </Tabs>
                </Dialog>
        );
    }
}




