import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
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

export default class Main extends React.Component {

    chipClick=()=>alert('add chip to search')

    componentDidMount(){
        var { popupId } = this.props.ui;
        var {user, events} = this.props.request;
        var data = events.find(evt=>evt._id===popupId);
        if (data.profile_id) this.props.actions.get(`users/${data.profile_id}`);
    }

    render() {
        return <div>null</div>;
        var { popupId } = this.props.ui
        var { events } = this.props.request;
        var user = this.props.request[`users/${popupId}`]
        var data = events.find(evt=>evt._id===popupId);
        if ( !data ) return;
        return (
            <Card>
                <CardHeader
                    title={user.username}
                    subtitle={user.username}
                    avatar={user.photo}
                />
                {/*<CardMedia*/}
                    {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
                {/*>*/}
                    {/*<img src="images/nature-600-337.jpg" />*/}
                {/*</CardMedia>*/}
                <CardTitle
                    style={style.evt}
                    title={data.title}
                    subtitle={`${moment(data.start_time).format("DD MMMM")} : ${moment(data.start_time).format("HH:mm")} - ${moment(data.end_time).format("HH:mm")}`}/>
                {data.tags.map( (tag,i)=><Chip style={style.chip} onTouchTap={this.chipClick} key={i}>{tag}</Chip>)}
                <CardText>{data.description}</CardText>
                <CardActions>
                    <FlatButton label="Пойду" />
                    <FlatButton label="Не пойду" />
                </CardActions>
            </Card>
        );
    }
}





