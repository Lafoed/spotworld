import React from 'react';
import DatePicker from 'material-ui/DatePicker';


export default class Datepicker extends React.Component{
    style={
        textDate:{
            width:"100px"
        },
        date:{
            fontSize: "10px",
            textAlign:"center"
        }
    }
    render(){
        return (
            <DatePicker
                {...this.props}
                style={this.style.date}
                autoOk={true}
                disableYearSelection={true}
                hideCalendarDate={true}
                textFieldStyle={this.style.textDate}
                container="inline"
                formatDate={date=>moment(date).format('DD MMMM YYYY')}
            />
        )
    }
}