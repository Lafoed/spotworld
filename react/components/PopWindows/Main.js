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
        var {popup} = this.props
        return (
            <Card>
                <CardHeader
                    title={popup.author}
                    subtitle={popup.author}
                    avatar={"https://pp.userapi.com/c633526/v633526599/1a853/ZXHy0-sh7Eg.jpg" || this.props.user && this.props.user.photo}
                />
                {/*<CardMedia*/}
                    {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
                {/*>*/}
                    {/*<img src="images/nature-600-337.jpg" />*/}
                {/*</CardMedia>*/}
                <CardTitle
                    style={this.style.evt}
                    title={popup.title}
                    subtitle={`${moment(popup.start_time).format("DD MMMM")} : ${moment(popup.start_time).format("HH:mm")} - ${moment(popup.end_time).format("HH:mm")}`}/>
                {popup.tags.map( (tag,i)=><Chip style={this.style.chip} onTouchTap={this.chipClick} key={i}>{tag}</Chip>)}
                <CardText>{popup.description}</CardText>
                <CardActions>
                    <FlatButton label="Пойду" />
                    <FlatButton label="Не пойду" />
                </CardActions>
            </Card>
        );
    }
}





