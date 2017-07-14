import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import DistanceIcon from 'material-ui/svg-icons/communication/location-on';

import { GridList, GridTile } from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';


var colours = {
    icons:"#8A8A8A",
    choosenItem:"#D7EDF9",
    accent:"#F23A9C"
}

var style = {
    newsItem:{
        backgroundColor:"rgba(250,250,255,0)",
        padding:"10px 15px 10px 15px"
    },
    newsItemHovered:{
        padding:"10px 15px 10px 12px",
        backgroundColor:colours.choosenItem,
        borderLeft:`3px solid ${colours.accent}`
    },
    description:{
        fontSize:14,
        textOverflow: "ellipsis",
        marginBottom:5
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
    titleHovered:{
        fontWeight:800,
        padding:"5px 10px 5px 0",
        fontSize:20,
        maxWidth: "80%",
        color:colours.accent
    },
    tags:{
        display:'flex',
        marginBottom:5,
    },

    distance:{
        display:"flex",
        alignItems: "center",
        color:colours.icons,
        position:"absolute",
        top:5,
        right:0
    },
    distanceIcon:{
        fill:colours.icons
    },
    user:{
        display:"flex",
        alignItems: "center",
        marginBottom:5
    },
    tag:{
        fontSize:14,
        marginLeft:5,
        color:colours.icons,
    },
    like:{
        position:"absolute",
        bottom:0,
        width:30,
        right:0
    },
    time:{
        display:"flex",
        alignItems: "center",
        marginBottom:5
    },
    item:{

    },
    img:{
        transition: "all 0.2s ease-out",
        transform: "translate(-50%,-5%)",
        height:"105%"
    }
}


export default class NewsItem extends React.Component{

    state={
        highLight:false
    }

    renderTags=tags=>{
        return tags.map(tag=><span style={style.tag}>{tag}</span>)
    }

    renderDescription=description=>{
        var size = 50;
        return description.length > size ? description.slice(0, size) + ' ...' : description
    }


    renderTime=event=>{
        var date = event.endDate?
            <div>{`c ${moment( event.startDate.iso ).format( 'DD.MM.YY' )} по ${moment( event.endDate.iso ).format( 'DD.MM.YY' )}`}</div> :
            <div>{`c ${moment( event.startDate.iso ).format( 'DD.MM.YY' )}`}</div>
        return (
            <div style={style.time}>
                <div>
                    {`${moment( event.startTime.iso ).format( 'HH:mm' )}  - ${moment( event.endTime.iso ).format( 'HH:mm' )}`}
                </div>
                {date}
            </div>
        )
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

    openEventPopup=()=>{
        this.props.onChooseEvent();
    }

    render = ()=>{
        var event = this.props.event
        var highLight = this.state.highLight;
        return(
            <GridList
                onTouchTap={this.openEventPopup}
                onMouseEnter={()=>this.setState({highLight:true})}
                onMouseLeave={()=>this.setState({highLight:false})}
                style={highLight?style.newsItemHovered:style.newsItem}
                cellHeight={160}
                cols={3}
            >
                <GridTile>
                    <img style={ highLight && style.img } src={event.img}/>
                </GridTile >

                <GridTile cols={2} style={style.infoContainer}>
                    <div style={highLight?style.titleHovered:style.title}>{event.title}</div>
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
    }
}



