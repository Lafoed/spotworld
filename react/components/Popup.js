import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import Main from './PopWindows/Main'

import {popup} from '../style'

export default class Popup extends React.Component {

    render() {
        var {toggleState} = this.props.actions;
        var {popupOpen} = this.props.ui;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={toggleState.bind(null,'popupOpen')}
            />
        ];

        return (
                <Dialog
                    titleStyle={popup.title}
                    bodyStyle={popup.body}
                    actionsContainerStyle={popup.actionContainer}
                    actions={actions}
                    modal={false}
                    open={popupOpen}
                    onRequestClose={toggleState.bind(null,'popupOpen')}
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




