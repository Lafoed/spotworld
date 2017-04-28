import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

export default class Main extends React.Component {
    state = {}
    style = {
        evt:{
            marginTop: "-88px",
            float: "right"
        },
        chip:{
            display:"inline-block",
            marginLeft:"7px"
        }
    }
    chipClick=()=>alert('add chip to search')


    render() {
        var { popupId } = this.props.ui
        var {user, markers} = this.props.request;
        var data = markers.find(mrk=>mrk._id===popupId);
        if ( !data ) return;
        return (
            <Card>
                <CardHeader
                    title={data.author}
                    subtitle={data.author}
                    avatar={"https://pp.userapi.com/c633526/v633526599/1a853/ZXHy0-sh7Eg.jpg" || user && user.photo}
                />
                {/*<CardMedia*/}
                    {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
                {/*>*/}
                    {/*<img src="images/nature-600-337.jpg" />*/}
                {/*</CardMedia>*/}
                <CardTitle
                    style={this.style.evt}
                    title={data.title}
                    subtitle={`${moment(data.start_time).format("DD MMMM")} : ${moment(data.start_time).format("HH:mm")} - ${moment(data.end_time).format("HH:mm")}`}/>
                {data.tags.map( (tag,i)=><Chip style={this.style.chip} onTouchTap={this.chipClick} key={i}>{tag}</Chip>)}
                <CardText>{data.description}</CardText>
                <CardActions>
                    <FlatButton label="Пойду" />
                    <FlatButton label="Не пойду" />
                </CardActions>
            </Card>
        );
    }
}





