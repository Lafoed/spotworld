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

    componentDidMount() {
        this.map = new Map('map');
    }
    componentWillReceiveProps(props){
        if (props.markers.length && this.state.markers){
            this.setState({markers:false})
            props.markers.forEach(marker => {
                this.map.addMarker(marker.coords, marker);
            });
        }
        if(props.userLocation[0]!=0 && this.state.location){
            this.setState({location:false})
            this.map.setView(props.userLocation, 8);
        }
        if(this.state.click){
            this.setState({click:false})
            this.map.on('click',this.mapClick.bind(this))
        }
    }


    mapClick(map, evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
        if (feature) {
            var data = feature.get('data');
            this.map.setView(data.coords, 8);
            this.props.openPopup(data);
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




