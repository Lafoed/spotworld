import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import TimePicker from 'material-ui/TimePicker';
import Tags from './Tags'


import Datepicker from './Datepicker'

import {popup} from '../style'

export default class Constructor extends React.Component {
    state = {
        title:"",
        description:"",
        startDate: null,
        endDate: null,
        startTime: null,
        endTime:null,
        tags:[]
    }


    save = evt =>{
        var { user } = this.props.request;
        if ( !user ) return console.error('no user');
        var data = Object.assign({}, this.state, {author:user.username}, {coords : [4213168.617498788, 7610311.138545399]} );
        delete data.startDate;
        delete data.endDate;
        delete data.startTime;
        delete data.endTime;
        this.props.actions.saveEvent(data);
        // this.close();
    }

    close = ()=>{
        this.props.actions.toggleState('constructorOpen');
        this.setState({
            title:"",
            description:"",
            startDate: null,
            endDate: null,
            startTime: null,
            endTime:null
        });
    }

    render() {
        var {  startDate, endDate, startTime, endTime, description, title } = this.state;
        var {toggleState} = this.props.actions;
        var {constructorOpen} = this.props.ui;
        var isDisabled = !(description && title && startDate && endDate && startTime && endTime);
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.close}
            />,
            <FlatButton
                label="Save"
                disabled={isDisabled}
                primary={true}
                onTouchTap={this.save}
            />
        ];

        return (
            <Dialog
                title={'Create event'}
                actionsContainerStyle={popup.actionContainer}
                actions={actions}
                modal={true}
                open={constructorOpen}
                onRequestClose={toggleState.bind(null, 'constructorOpen')}
                autoScrollBodyContent={true}
            >
                <TextField
                    value={this.state.title}
                    onChange={(evt,val)=>this.setState({title:val})}
                    floatingLabelText={'Event title'}
                    hintText="Enter event title"
                    fullWidth={true}
                /><br />
                <TextField
                    value={this.state.description}
                    onChange={(evt,val)=>this.setState({description:val})}
                    fullWidth={true}
                    floatingLabelText={'Event description'}
                    hintText="Enter event description"
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                /><br />
                <Tags
                    tagsListener={(tags)=>this.setState({tags:tags})}
                />
                <div  style={{
                    display:"inline-block"
                }}>
                    <Datepicker
                        onChange={(evt,val)=>this.setState({startDate:val})}
                        floatingLabelText="Start Date"
                        autoOk={true}
                    />
                </div>
                <TimePicker
                    onChange={(evt,val)=>this.setState({startTime:val})}
                    style={{
                        marginLeft:30,
                        display:"inline-block",
                    }}
                    floatingLabelText="Start Time"
                    format={"24hr"}
                    autoOk={true}
                    hintText="Start time"/>
                <br/>
                <div  style={{
                    display:"inline-block"
                }}>
                    <Datepicker
                        onChange={(evt,val)=>this.setState({endDate:val})}
                        floatingLabelText="End Date"
                        autoOk={true}
                    />
                </div>
                <TimePicker
                    onChange={(evt,val)=>this.setState({endTime:val})}
                    style={{
                        marginLeft:30,
                        display:"inline-block"
                    }}
                    floatingLabelText="End Time"
                    format={"24hr"}
                    autoOk={true}
                    hintText="End time"/>
            </Dialog>
        );
    }
}




