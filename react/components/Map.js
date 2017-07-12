import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Paper from 'material-ui/Paper'

export default class MapLeaf extends React.Component {

    componentDidMount() {
        this.props.actions.getUserCoords();
        this.props.actions.getAllEvents();
    }

    mapClick = evt => {
        console.log('map click');
        var coords = evt.latlng;
        var point = new Parse.GeoPoint({latitude: coords.lat, longitude: coords.lng});
        if ( this.props.view.createMarker ) {
             var event = {
                relatedUser:this.props.auth.user,
                coords:point,
                description:"create marker is work!",
                startTime:new Date(),
                endTime:new Date(),
                tags:['create','first'],
                img:"http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                title:"created marker"
            };
            this.props.actions.editEvent(event);
            this.props.actions.toggleView("createMarker");
        }
    }

    onViewportChanged = viewport => {
        // The viewport got changed by the user, keep track in state
        console.log(viewport);
    }
    markerClick=console.log;
    popupClick=console.log;
    innerDivClick=console.log;

    renderMarker = event=>(
        <Marker key={event.objectId} position={[ event.coords.latitude, event.coords.longitude ]} onClick={this.markerClick}>
            <Popup >
                <div>
                    <div>{moment( event.end_time ).format( 'MM.DD HH:mm' )}</div>
                    <div>{moment( event.start_time ).format( 'MM.DD HH:mm' )}</div>
                    <div>{event.tags.concat( ',' )}</div>
                    <div>{event.title}</div>
                    <div>{event.author}</div>
                    <img style={{ maxWidth:50 }} src={event.img}/>
                </div>
            </Popup>
        </Marker>
    )

    render() {
        var { events } = this.props.request;
        var { center, zoom } = this.props.map;
        return (
            <Map center={[ center.latitude, center.longitude ]}
                 style={{ position:"fixed", height:document.documentElement.clientHeight, width:"100%", cursor: this.props.view.createMarker?"pointer":"default" }}
                 zoom={zoom}
                 onViewportChanged={this.onViewportChanged}
                 onClick={this.mapClick}>
                <TileLayer
                    url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFmb2VkIiwiYSI6ImNqMHA2MHk5ODAwMDgzMnFxamQyNmVha3IifQ.8r9fW0pPDrNW7iwBqkVhhg'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                { events.map( event=>this.renderMarker( event ) ) }
            </Map>
        )
    }
}




