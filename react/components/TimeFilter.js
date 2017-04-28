import React from 'react';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import {GridList, GridTile} from 'material-ui/GridList';

export default class TimeFilter extends React.Component {
    style={
        block:{
            position:"absolute",
            bottom:"20px",
            width: "80%",
            left: "10%",
            padding:"0"
        },
        slider:{
            padding: "10px 30px 12px"
        }
    }
    state={
        startDate:moment(),
        endDate:moment().add(1,'d')
    }

    componentDidMount(){
        var start1day =moment().set({'hour':0,'minutes':0,'seconds':0});
        var end2day =moment().add(1,'d').set({'hour':23,'minutes':59,'seconds':59});

        noUiSlider.create(this.refs.slider, {
            start: [ moment().valueOf(), moment().valueOf() + 50000000 ],
            behaviour: 'drag',
            connect: true,
            range: {
                'min':  start1day.valueOf(),
                'max':  end2day.valueOf()
            },
            format: {
                to:val=>moment(Math.ceil(val)).format("HH:mm"),
                from: val=>val
            },
            tooltips:[true,true]
        });
        // this.refs.slider.noUiSlider.on('update', console.log);
    }



    render(){
        return(
            <Paper style={this.style.block} className="no-highlight ">
                <GridList cols={2} cellHeight="auto" padding={0}>
                    <GridTile>
                        <Datapicker
                            hintText="start"
                            value={this.state.startDate.toDate()}
                            maxDate={this.state.endDate.clone().add(-1,'day').toDate()}
                            onChange={(evt,date)=>this.setState({startDate:moment(date)})}/>
                    </GridTile>
                    <GridTile>
                        <Datapicker
                            hintText="end"
                            value={this.state.endDate.toDate()}
                            minDate={this.state.startDate.clone().add(1,'day').toDate()}
                            onChange={(evt,date)=>this.setState({endDate:moment(date)})}/>
                    </GridTile>
                    <GridTile cols={2} style={this.style.slider}>
                        <div ref="slider"/>
                    </GridTile>
                </GridList>
            </Paper>
        )
    }
}

class Datapicker extends React.Component{
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

