import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import TimePicker from 'material-ui/TimePicker';

import Datepicker from './Datepicker'

import {popup} from '../style'

export default class Constructor extends React.Component {
    state = {
        autocomplite: ['tags', 'different'],
        tags: [],
        startDate: moment(),
        endDate: moment().add(1, 'd'),
        startTime: moment(),
        endTime:moment()

    }

    chipAdd = (text) => {
        //TODO for samtarter result use regexp
        var {tags} = this.state;
        var newValue = tags.concat(text.split(' ').filter(i => !!i));
        this.setState({tags: newValue});
    }

    chipDelete = (chip, index) => {
        var {tags} = this.state;
        tags.splice(index, 1);
        this.setState({tags: tags});
    }
    save = evt =>{
        toggleState.bind(null, 'constructorOpen')
    }

    render() {
        var {toggleState} = this.props.actions;
        var {constructorOpen} = this.props.ui;
        var isDisabled = true;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.save}
            />,
            <FlatButton
                label="Save"
                disabled={isDisabled}
                primary={true}
                onTouchTap={toggleState.bind(null, 'constructorOpen')}
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
                    floatingLabelText={'Event title'}
                    hintText="Enter event title"
                    fullWidth={true}
                /><br />
                <TextField
                    fullWidth={true}
                    floatingLabelText={'Event description'}
                    hintText="Enter event description"
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                /><br />
                <ChipInput
                    style={{overflow: "auto"}}
                    floatingLabelText="tags"
                    fullWidth={true}
                    value={this.state.tags}
                    dataSource={this.state.autocomplite}
                    onRequestAdd={this.chipAdd}
                    onRequestDelete={this.chipDelete}
                />
                <Datepicker
                    floatingLabelText="Start Date"
                    autoOk={true}
                /><TimePicker
                    autoOk={true}
                    hintText="Start time"/> <br/>
                <Datepicker
                    floatingLabelText="End Date"
                    autoOk={true}
                /><TimePicker
                    autoOk={true}
                    hintText="End time"/>
            </Dialog>
        );
    }
}




