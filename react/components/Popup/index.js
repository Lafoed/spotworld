import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import Main from './Main'

var styles={
    body:{
        padding:"0px"
    }
}

export default class Popup extends React.Component {

    close=()=>{
        this.props.actions.toggleView('popup');
    }

    render() {
        var isOpen = this.props.view.popup;


        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.close}
            />
        ];

        return (
                <Dialog
                    bodyStyle={styles.body}
                    actions={actions}
                    modal={false}
                    open={isOpen}
                    onRequestClose={this.close}
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




