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
            padding: "10px 20px"
        }
    }
    componentDidMount(){
        noUiSlider.create(this.refs.slider, {
            start: [ 20, 40 ],
            behaviour: 'drag',
            connect: true,
            range: {
                'min':  20,
                'max':  80
            }
        });
    }

    render(){
        return(
            <Paper style={this.style.block}>
                <GridList cols={2} cellHeight="auto" padding={0}>
                    <GridTile>
                        <Datapicker hintText="start"/>
                    </GridTile>
                    <GridTile>
                        <Datapicker hintText="end"/>
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
        }
    }
    render(){
        return (
            <DatePicker
                {...this.props}
                autoOk={true}
                disableYearSelection={true}
                hideCalendarDate={true}
                textFieldStyle={this.style.textDate}
                container="inline"
            />
        )
    }
}

