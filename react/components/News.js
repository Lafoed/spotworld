// TODO infinite scroll
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import NewsItem from './NewsItem';
import Like from './Like';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';


const style = {
    container:{
        zIndex:1000,
        display:"block",
        position:"absolute",
        left:20,
        top:70,
        width:"45%",
        backgroundColor:"rgba(250,250,250,0.9)",
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

    getDistance=(coords)=>{
        var {userLocation} = this.props.map;
        if (!userLocation) return null;
        var distance = geo.getDistance( userLocation, {latitude:coords.latitude,longitude:coords.longitude} );
        return geo.convertUnit('km',distance, 2 ) + " km";
    }

    navigateToEvent=event=>{
        this.props.actions.setMapView({center: {latitude:event.get("coords").latitude, longitude:event.get("coords").longitude- 0.15}});
    }

    sortChange=(evt,i,value)=>{
        this.props.actions.uiInput({sort:value})
    }


    render() {
        var { events } = this.props.request;
        var {sort} = this.props.ui;
        var {user} = this.props.auth;
        return (
            <Paper style={style.container}>
                <div>
                    <DropDownMenu value={sort} onChange={this.sortChange}>
                        <MenuItem value="distance" primaryText="По расстоянию" />
                        <MenuItem value="popular" primaryText="По популярности" />
                    </DropDownMenu>
                </div>
                    {events.map( event =>
                        <NewsItem
                            key={event.id}
                            distance={this.getDistance(event.get("coords"))}
                            navigateToEvent={this.navigateToEvent.bind(this,event)}
                            onChooseEvent={this.openEvent.bind(this,event)}
                            like={<Like user={user} event={event}/>}
                            event={event} />,
                        )}
            </Paper>
        );
    }
}






