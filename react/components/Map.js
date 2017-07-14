import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Like from './Like'

export default class MapLeaf extends React.Component {

    componentDidMount() {
        this.props.actions.getUserCoords();
        this.props.actions.getAllEvents();
        this.checkForUpdates();
    }



    checkForUpdates(){
        this.checkTimer = setTimeout(()=>{
            this.props.actions.isServerDataChanged();
            if ( this.props.request.isNeedUpdate ) {
                this.props.actions.getAllEvents();
                this.checkForUpdates();
            } else {
                this.checkForUpdates();
            }
        },3000)
    }

    componentWillUnmount(){
        clearTimeout(this.checkTimer);
    }

    mapClick = evt => {
        var coords = evt.latlng;
        if ( this.props.view.createMarker ) {
            var point = new Parse.GeoPoint({latitude: coords.lat, longitude: coords.lng});
            this.props.actions.editEvent({coords:point, relatedUser:this.props.auth.user});
            this.props.actions.toggleView("createMarker");
        }
    }

    onViewportChanged = viewport => {
        // The viewport got changed by the user, keep track in state
        // this.props.actions.setMapView({zoom:viewport.zoom,center:{latitude:viewport.center[0], longitude:viewport.center[1]}});
    }
    markerClick=console.log;
    popupClick=console.log;
    innerDivClick=console.log;

    renderMarker = event=>(
        <Marker key={event.id} position={[ event.get("coords").latitude, event.get("coords").longitude ]} onClick={this.markerClick}>
            <Popup >
                <div>
                    <div>{moment( event.get("endTime") ).format( 'MM.DD HH:mm' )}</div>
                    <div>{moment( event.get("startTime")).format( 'MM.DD HH:mm' )}</div>
                    <div>{event.get("tags").concat( ',' )}</div>
                    <div>{event.get("title")}</div>
                    <img style={{ maxWidth:50 }} src={event.get("img")}/>
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




