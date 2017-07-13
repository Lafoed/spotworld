// TODO infinite scroll
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import DistanceIcon from 'material-ui/svg-icons/communication/location-on';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const style = {
    container:{
        zIndex:1000,
        display:"block",
        position:"absolute",
        left:20,
        top:70,
        width:"40%",
        padding:10
    },
    description:{
        fontSize:14,
        textOverflow: "ellipsis"
    },
    infoContainer:{
        marginLeft:15,
        fontSize:14,
        overflow:"hidden"
    },
    title:{
        fontWeight:800,
        padding:"5px 10px 5px 0",
        fontSize:20,
        maxWidth: "80%"
    },
    tags:{
        display:'flex'
    },
    newsItem:{
        padding:15
    },
    distance:{
        display:"flex",
        alignItems: "center",
        color:"lightgray",
        position:"absolute",
        top:5,
        right:0
    },
    distanceIcon:{
        fill:"lightgray"
    },
    user:{
        display:"flex",
        alignItems: "center",
    },
    tag:{
        fontSize:14,
        marginLeft:5,
        color:"lightgray",
    },
    like:{
        position:"absolute",
        top:35,
        width:30,
        right:0
    }
};

export default class News extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { open:true };
    }

    openEvent=event=>{
        var {toggleView, uiInput} = this.props.actions;
        toggleView('popup');
        uiInput( {chosenPopupId:event._id} )
    }


    renderTime=event=>{

        var date = event.endDate?
            <div>{`c ${moment( event.startDate.iso ).format( 'DD.MM.YY' )} по ${moment( event.endDate.iso ).format( 'DD.MM.YY' )}`}</div> :
            <div>{`c ${moment( event.startDate.iso ).format( 'DD.MM.YY' )}`}</div>
        return (
            <div>
                <div>
                    {`${moment( event.startTime.iso ).format( 'HH:mm' )}  - ${moment( event.endTime.iso ).format( 'HH:mm' )}`}
                </div>
                {date}
            </div>
        )
    }




    renderTags=tags=>{
        return tags.map(tag=><span style={style.tag}>{tag}</span>)
    }

    renderDescription=description=>{
        var size = 50;
        return description.length > size ? description.slice(0, size) + ' ...' : description
    }

    renderUser=user=>{
        return (
            <div style={style.user}>
            <Avatar size={30}>
                {user.objectId.slice(0,1)}
            </Avatar>
                <div>{user.objectId}</div>
            </div>
        )
    }
    renderDistance=()=>{
        return (
            <div style={style.distance}><DistanceIcon style={style.distanceIcon}/><div >12 km</div></div>
        )
    }

    eventRender = event=>(
        <GridList
            style={style.newsItem}
            cellHeight={160}
            cols={3}
        >
            <GridTile  style={style.tile}>
                    <img src={event.img}/>
            </GridTile >

            <GridTile cols={2} style={style.infoContainer}>
                <div style={style.title}>{event.title}</div>
                {this.renderUser(event.relatedUser)}
                {this.renderDistance(event.relatedUser)}
                <div style={style.tags}> {this.renderTags(event.tags)} </div>
                {this.renderTime(event)}
                <div style={style.description}>{this.renderDescription(event.description)}</div>
                <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    style={style.like}
                />
            </GridTile>
        </GridList>


    )

    render() {
        var events = this.props.request.events;
        return (
            <Paper style={style.container}>
                <GridList
                    cellHeight={160}
                    cols={1}
                    padding={10}
                >
                    {events.map( event => (
                        <GridTile
                            onTouchTap={this.openEvent.bind(this,event)}
                            className="event_news"
                            key={event.objectId}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                            children={this.eventRender(event)}
                        />
                    ) )}
                </GridList>
            </Paper>
        );
    }
}






