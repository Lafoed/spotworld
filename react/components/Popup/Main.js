import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
var style = {
    chip:{
        display:"inline-block",
        marginLeft:"7px"
    }
}

export default class Main extends React.Component {

    chipClick=()=>alert('add chip to search')

    render() {
        var {event} = this.props;
        if ( !this.props.event ) return null;
        return (
            <Card>
                <CardHeader
                    title={ "user_id:"+event.user_id }
                />
                {/*<CardMedia*/}
                    {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
                {/*>*/}
                    {/*<img src="images/nature-600-337.jpg" />*/}
                {/*</CardMedia>*/}
                <CardTitle
                    title={event.title}
                    subtitle={`${moment(event.start_time).format("DD MMMM")} : ${moment(event.start_time).format("HH:mm")} - ${moment(event.end_time).format("HH:mm")}`}/>
                {event.tags.map( (tag,i)=><Chip style={style.chip} onTouchTap={this.chipClick} key={i}>{tag}</Chip>)}
                <CardText>{event.description}</CardText>
                <CardActions>
                    <FlatButton label="Пойду" />
                    <FlatButton label="Не пойду" />
                </CardActions>
            </Card>
        );
    }
}





