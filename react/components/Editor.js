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
        this.props.actions.editEvent( event );
        setTimeout(()=>this.props.actions.saveEvent( this.props.map.editEvent ),0);
    }

    getFullTime = ( date, time )=>moment( date ).hour( moment( time ).get( 'hour' ) ).minute( moment( time ).get( 'minute' ) )

    close = ()=>{
        console.log('TODO clear edit event and state')
        this.props.actions.editEvent(null);
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

    state={
        startDate:'',
        endDate:'',
        startTime:'',
        endTime:'',
        tags:[]
    }

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
        var event = this.readValues();
        return !!( event.title && event.startDate && event.startTime && event.endTime && event.endDate );
    }

    readValues() {
        var result = {};
        Object.keys( this.refs ).forEach( key=> {
            if ( this.refs[ key ].getValue ) {
                result[ key ] = this.refs[ key ].getValue();
            } else {
                result[key] = this.state[key]
            }
        } )
        return result
    }
    onChange(field,smth,date){
        this.setState({[field]:date})
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
                    ref="tags"
                    tagsListener={(tags)=>this.setState({tags:tags})}
                />
                <div  style={{ display:"flex" }}>
                    <Datepicker
                        ref="startDate"
                        floatingLabelText="Start Date"
                        autoOk={true}
                        onChange={this.onChange.bind(this,"startDate")}
                    />
                    <TimePicker
                        ref="startTime"
                        floatingLabelText="Start Time"
                        format={"24hr"}
                        autoOk={true}
                        onChange={this.onChange.bind(this,"startTime")}
                        hintText="Start time"/>
                </div>

                <br/>
                <div  style={{ display:"flex" }}>
                    <Datepicker
                        ref="endDate"
                        floatingLabelText="End Date"
                        autoOk={true}
                        onChange={this.onChange.bind(this,"endDate")}
                    />
                    <TimePicker
                        ref="endTime"
                        floatingLabelText="End Time"
                        format={"24hr"}
                        autoOk={true}
                        onChange={this.onChange.bind(this,"endTime")}
                        hintText="End time"/>
                </div>

            </Dialog>
        )
    }

}
