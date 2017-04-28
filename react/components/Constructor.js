import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';

import {popup} from '../style'

export default class Constructor extends React.Component {
    render() {
        var {toggleState} = this.props.actions;
        var {constructorOpen} = this.props.ui;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={toggleState.bind(null,'constructorOpen')}
            />
        ];

        return (
            <Dialog
                titleStyle={popup.title}
                bodyStyle={popup.body}
                actionsContainerStyle={popup.actionContainer}
                actions={actions}
                modal={true}
                open={constructorOpen}
                onRequestClose={toggleState.bind(null,'constructorOpen')}
                autoScrollBodyContent={true}
            >
                <Tabs>
                    <Tab label="Main"></Tab>
                </Tabs>
            </Dialog>
        );
    }
}




