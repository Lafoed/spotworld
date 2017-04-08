import React from 'react';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import {GridList, GridTile} from 'material-ui/GridList';


export default class TimeFilter extends React.Component {
    style={
        slider:{
            position:"absolute",
            bottom:"20px",
            width: "50%",
            left: "25%"
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
            <Paper style={this.style.slider}>
                <GridList cols={2} >
                    <GridTile cols={2}>
                        <div ref="slider"/>
                    </GridTile>
                    <GridTile>
                        <DatePicker hintText="startDate" container="inline"/>
                    </GridTile>
                    <GridTile>
                        <DatePicker hintText="endDate" container="inline"/>
                    </GridTile>
                </GridList>
            </Paper>
        )
    }
}

