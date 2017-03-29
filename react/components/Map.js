import { render } from 'react-dom'
import moment from 'moment'
// import ol from 'openlayers'
import ol from 'openlayers/dist/ol-debug.js'
import Map from '../../services/lib/Map'


export default class MapReact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info:{
                author:'admin',
                description:"the very first marker",
                tags:["#first","#tags"]
            }
        }
        this.map=null;
    }

    componentWillReceiveProps(props){
        debugger;
        this.props.markers.forEach(marker=> {
            this.map.addMarker(marker.coords, marker.description);
        });
        this.map.setView(this.props.userLocation, 8);
    }
    componentDidMount() {
        this.map = new Map('map');
        // this.map.on('click', this.mapClick.bind(this) );
    }


    showPopup(feature){
        var featureCoords = feature.getGeometry().getCoordinates();
        var popup = new ol.Overlay({
            element: document.getElementById('popup'),
            position: featureCoords,
            positioning: 'bottom-center',
            //stopEvent: false,
            offset: [0, -50]
        });
        var popupElem = popup.getElement();
        var info = feature.get('info');
        $(popupElem).find('.mdc-card__subtitle').html(info.author);
        $(popupElem).find('.mdc-card__supporting-text').html(info.description);
        $(popupElem).css({display:'block'});
        this.map.addOverlay(popup);
        this.map.getView().animate({
            //TODO get set view marker in left bottom of screen
            center:featureCoords
        });
    }

    mapClick(evt){
        var feature = this.map.forEachFeatureAtPixel(evt.pixel,feature=>feature);
        if (feature) {
            this.showPopup(feature);
        } else {
            // this.createMarker();
        }
    }
    createMarker(){
        async function asyncClick(){
            var { markers } = this.props;
            var marker = await this.saveMarker(evt);
            markers = markers.concat(marker);
            this.addMarkersOnMap(markers);
            this.setState({markers:markers})
        }
        asyncClick.call(this).catch(err=>console.error(err));
    }

    saveMarker(evt){
        return new Promise((resolve,reject)=>{
            var body = Object.assign({
                coords:ol.proj.toLonLat(evt.coordinate),
                start_time:moment().format(),
                end_time:moment().format()
            }, this.state.info);
            $.post( 'api/marker', JSON.stringify(body) )
                .done(resolve)
                .fail(reject)
        })
    }

    render(){
        console.log('render MAP!!!');
        var availHeight = document.documentElement.clientHeight;
        var style={height:availHeight};
        return <div>
            <div id="map" style={style}></div>
        </div>
    }
}


function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}
// export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Map)

