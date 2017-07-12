import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Tags from './Tags'
import Datepicker from './Datepicker'

var style = {
    evt:{
        marginTop: "-88px",
        float: "right"
    },
    chip:{
        display:"inline-block",
        marginLeft:"7px"
    }
}

export default class Editor extends React.Component {

    save = event =>{
        this.props.actions.saveEvent(event);
        // var { user } = this.props.request;
        // var { coordsClick } = this.props.ui;
        // var { title, description, startDate, endDate, startTime, endTime, tags} = event;
        // var start_time = new Date( this.getFullTime(startDate,startTime).valueOf() );
        // var end_time = new Date( this.getFullTime(endDate,endTime).valueOf() );
        // var data = Object.assign({}, {
        //     start_time:start_time,
        //     end_time:end_time,
        //     profile_id:user._id,
        //     coords : coordsClick,
        //     title: title,
        //     description: description,
        // } );
        // this.props.actions.saveEvent(data);
        // this.close();
    }

    getFullTime = ( date, time )=>moment( date ).hour( moment( time ).get( 'hour' ) ).minute( moment( time ).get( 'minute' ) )

    close = ()=>{
        console.log('TODO clear edit event and state')
        // this.props.actions.editEvent(null);
    }

    render() {
        var isConstructorOpen = !!this.props.map.editEvent;
        return (
            <Constructor
                open={isConstructorOpen}
                onSave={this.save}
                onClose={this.close}
            />
        );
    }
}



class Constructor extends React.Component{

    close=()=>{
        this.props.onClose()
    }

    save=()=>{

        if (this.isValid()){
            this.props.onSave(this.readValues())
        } else {
            alert('fields not valid');
        }
    }

    isValid=()=>{
        var { description, title } = this.readValues();
        return !!(title && description)
    }

    readValues=()=>{
        var title = this.refs.title.getValue();
        var description = this.refs.description.getValue();
        return {
            title:title,
            description:description
        }
    }

    render(){
        var actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.close.bind(this)}
            />,
            <FlatButton
                label="Save"
                disabled={false}
                primary={true}
                onTouchTap={this.save.bind(this)}
            />
        ];
        return(
            <Dialog
                title={'Create event'}
                actions={actions}
                modal={true}
                open={this.props.open}
                onRequestClose={this.close.bind(this)}
                autoScrollBodyContent={true}
            >
                <TextField
                    ref="title"
                    floatingLabelText={'Event title'}
                    hintText="Enter event title"
                    fullWidth={true}
                /><br />
                <TextField
                    ref="description"
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
                <div  style={{ display:"flex" }}>
                    <Datepicker
                        ref="startDate"
                        floatingLabelText="Start Date"
                        autoOk={true}
                    />
                    <TimePicker
                        ref="startTime"
                        floatingLabelText="Start Time"
                        format={"24hr"}
                        autoOk={true}
                        hintText="Start time"/>
                </div>

                <br/>
                <div  style={{ display:"flex" }}>
                    <Datepicker
                        ref="startDate"
                        floatingLabelText="End Date"
                        autoOk={true}
                    />
                    <TimePicker
                        ref="startTime"
                        floatingLabelText="End Time"
                        format={"24hr"}
                        autoOk={true}
                        hintText="End time"/>
                </div>

            </Dialog>
        )
    }

}
