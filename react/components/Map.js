import {render} from 'react-dom'
import moment from 'moment'
import Map from '../../services/lib/Map'


export default class MapReact extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state={
            events:true,
            location:true,
        }
    }

    componentDidMount() {
        this.map = new Map( 'map' );
        this.map.on( 'click', this.mapClick.bind( this ) );
        // this.map.on( 'click', this.props.actions.mapClick );
    }

    componentWillReceiveProps( props ){
        var { userLocation } = props.ui;
        var { events } = props.request;

        if ( events.length && this.state.events ){
            this.setState( {events:false} )

            events.forEach( event => {
                this.map.addMarker(event.coords, event._id);
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
            actions.setUiState( "coordsClick", evt.coordinate );
            actions.toggleState( "constructorOpen" );
            actions.toggleState( "markerMode" );
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




