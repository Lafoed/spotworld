import { render } from 'react-dom'



export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coords:[0,0]
        }
    }

    componentDidMount(){
        this.getCurrentLocation();
    }
    componentDidUpdate(){
        this.addMap();
    }

    getCurrentLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>this.setState({coords:[position.coords.longitude, position.coords.latitude ]}));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    addMap(){
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(this.state.coords)),
            name: 'first icon'
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                src: 'img/icon1.png'
            }))
        });

        iconFeature.setStyle(iconStyle);

        var vectorSource = new ol.source.Vector({
            features: [iconFeature]
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        var mapLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        var map = new ol.Map({
            layers: [mapLayer, vectorLayer],
            target: document.getElementById('map'),
            view: new ol.View({
                center: ol.proj.fromLonLat(this.state.coords),
                zoom: 5
            })
        });

        var element = document.getElementById('popup');

        var popup = new ol.Overlay({
            element: element,
            positioning: 'bottom-center',
            stopEvent: false,
            offset: [37, 50]
        });
        map.addOverlay(popup);

        // display popup on click
        map.on('click', function(evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel,
                function(feature) {
                    return feature;
                });
            if (feature) {
                console.log('feature');
            } else {
                console.log('no feature');
            }
        });

        // change mouse cursor when over marker
        map.on('pointermove', function(e) {
            if (e.dragging) {
                console.log('e.dragging');
                return;
            }
            var pixel = map.getEventPixel(e.originalEvent);
            var hit = map.hasFeatureAtPixel(pixel);
            map.getTarget().style.cursor = hit ? 'pointer' : '';
        });
    }

    render(){
        console.log('render MAP!!!');
        var style={height:screen.availHeight};
        return <div>
            <div id="map" style={style}></div>
            <div id="popup" ></div>
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

