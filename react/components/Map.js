import {render} from 'react-dom'
import moment from 'moment'
import Map from '../../services/lib/Map'


export default class MapReact extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state={
            markers:true,
            location:true,
            click:true
        }
    }

    marker={
        author: "i am",
        description: "the very first marker",
        end_time: "2017-03-18T21:23:53.000Z",
        start_time: "2017-03-18T21:23:53.000Z",
        tags: ["#first", "#tags"]
    }

    componentDidMount() {
        this.map = new Map( 'map' );
        this.map.on( 'click', this.mapClick.bind( this ) );
        // this.map.on( 'click', this.props.actions.mapClick );
    }

    componentWillReceiveProps( props ){
        var { userLocation } = props.ui;
        var { markers } = props.request;

        if ( markers.length && this.state.markers ){
            this.setState( {markers:false} )
            markers.forEach( marker => {
                this.map.addMarker(marker.coords, marker._id);
            });
        }
        if ( userLocation[0]!=0 && this.state.location ) {
            this.setState({location:false})
            this.map.setView(userLocation, 8);
        }

    }


    mapClick(Map, evt) {
        var { actions, ui } = this.props;
        if ( ui.markerMode ){
            // var marker = {...this.marker};
            // marker.coords = evt.coordinate;
            // Map.addMarker( evt.coordinate, marker );
            debugger;
            actions.toggleState("constructorOpen");
            actions.toggleState("markerMode");
            // this.props.actions.saveMarker(marker);
            return;
        }
        var feature = Map.getFeatures(evt.pixel);
        if ( !feature ) return;
        this.map.setView( feature.getGeometry().flatCoordinates );

        var id = feature.getId();
        if ( !id ) return;

        actions.setUiState('popupId',id);
        actions.toggleState("popupOpen");
    }


    render() {
        return (
            <div>
                <div
                    id="map"
                    style={{height: document.documentElement.clientHeight}}
                    className={this.props.ui.markerMode?"cursorMarker":""}
                ></div>
            </div>)
    }
}




