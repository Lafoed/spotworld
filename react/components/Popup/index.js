import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import Main from './Main'

export default class Popup extends React.Component {

    close=()=>{
        this.props.actions.toggleView('popup');
        this.props.actions.uiInput({chosenPopupId:null});
    }

    render() {
        var isOpen = this.props.view.popup;
        var chosenEvent = this.props.request.events.find( event=>event._id === this.props.ui.chosenPopupId );
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.close}
            />
        ];

        return (
                <Dialog
                    actions={actions}
                    modal={false}
                    open={isOpen}
                    onRequestClose={this.close}
                    autoScrollBodyContent={true}
                >
                    <Main event={chosenEvent}/>
                </Dialog>
        );
    }
}




