import {render} from 'react-dom'
import moment from 'moment'
import ol from 'openlayers/dist/ol-debug.js'
import Map from '../../services/lib/Map'


export default class MapReact extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        this.map = new Map('map');
    }
    componentWillReceiveProps(props){
        props.markers.forEach(marker => {
            this.map.addMarker(marker.coords, marker.description);
        });
        this.map.setView(props.userLocation, 8);
    }


    mapClick(evt) {
        var feature = this.map.forEachFeatureAtPixel(evt.pixel, feature => feature);
        if (feature) {
            // this.showPopup(feature);
        } else {
            // this.createMarker();
        }
    }


    render() {
        return (
            <div>
                <div id="map" style={{height: document.documentElement.clientHeight}}></div>
            </div>)
    }
}




