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
        if(this.props.markerMode){
            var marker = {...this.marker};
            marker.coords = evt.coordinate;
            this.map.addMarker( evt.coordinate, marker );
            this.props.switchMarkerMode();
            this.props.saveMarker(marker);
            return;
        }
        var feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
        if (feature) {
            var data = feature.get('data');
            var size = map.getSize();
            var pixelCoords = map.getPixelFromCoordinate(data.coords);
            console.log(data.coords);
            console.log(pixelCoords);
            // var resultPixelCoords = [
            //     pixelCoords[0]+20,
            //     pixelCoords[1]
            // ]
            var resultCoords = map.getCoordinateFromPixel(pixelCoords);
            this.map.setView(resultCoords);
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




