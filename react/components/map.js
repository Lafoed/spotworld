import { render } from 'react-dom'
import moment from 'moment'
import ol from 'openlayers/dist/ol-debug.js'


export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userLocation:[0, 0],
            markers:[]
        }
        this.mapInstance=null;
    }

    componentDidMount(){
        async function asyncMount() {
            this.addMap();
            var position = await this.getUserLocation();
            var userLocation = [position.coords.longitude,position.coords.latitude];
            this.mapInstance.setView(new ol.View({
                center:ol.proj.fromLonLat(userLocation),
                zoom:12
            }));
            this.setState({userLocation:userLocation});
            var markers = await this.getMarkers();
            this.setState({markers:markers});
            this.addMarkers(markers);
        }
        asyncMount.call(this).catch(err=>console.error(err))
    }
    componentDidUpdate(){
        this.addMarkers(this.state.markers);
    }

    getMarkers(){
        return new Promise((resolve,reject)=>{
            $.get( 'api/marker' )
                .done(resolve)
                .fail(reject)
        })

    }

    addMarkers(markers = this.state.markers) {
        var {markers} = this.state;
        var markerFeatures = markers.map(marker=> {
            let markers = this.createMarker(marker.coords);
            return markers;
        });
        var markerLayer = this.vectorLayer(markerFeatures);
        this.mapInstance.addLayer(markerLayer);
    }

    getUserLocation(){
        return new Promise((resolve,reject)=>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        })
    }

    addMap(){
        var {userLocation} = this.state;
        this.mapInstance = new ol.Map({
            layers: [new ol.layer.Tile({
                source: new ol.source.OSM()
            })],
            target: document.getElementById('map'),
            view: new ol.View({
                center: ol.proj.fromLonLat(userLocation),
                zoom: 14
            })
        });

        this.mapInstance.on('click', this.mapClick.bind(this) );

        this.mapInstance.on('pointermove', (e)=>{
            if (e.dragging) {
                console.log('dragging');
                return;
            }
            var pixel = this.mapInstance.getEventPixel(e.originalEvent);
            var hit = this.mapInstance.hasFeatureAtPixel(pixel);
            this.mapInstance.getTarget().style.cursor = hit ? 'pointer' : '';
        });

        var zoomslider = new ol.control.ZoomSlider();
        this.mapInstance.addControl(zoomslider);
    }

    vectorLayer(features = []){
        var vectorSource = new ol.source.Vector({
            features: features
        });
        var layer = new ol.layer.Vector({
            source: vectorSource
        });

        return layer
    }

    createMarker(coords){
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
            name: 'first icon'
            //info get here
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                src: 'img/icon1.png'
            }))
        });
        iconFeature.setStyle(iconStyle);
        return iconFeature;
    }

    mapClick(evt){
        var feature = this.mapInstance.forEachFeatureAtPixel(evt.pixel,feature=>feature);
        if (feature) {
            //send this shit somewhere else
            var featureCoords = feature.getGeometry().getCoordinates();
            var popup = new ol.Overlay({
                element: document.getElementById('popup'),
                position: featureCoords,
                positioning: "top-right"
            });
            this.mapInstance.addOverlay(popup);
            this.mapInstance.setView(new ol.View({
                center:featureCoords.map(coord=>coord+100)
            }));
            console.log('this code to show popup');
        } else {
            console.log('create marker send to bd and render');
            async function asyncClick(){
                var { markers } = this.state;
                var marker = await this.saveMarker(evt);
                markers = markers.concat(marker);
                this.addMarkers(markers);
                this.setState({markers:markers})
            }
            asyncClick.call(this).catch(err=>console.error(err));$(element).popover('destroy');
        }
    }

    saveMarker(evt){
        return new Promise((resolve,reject)=>{
            var body = {
                coords:ol.proj.toLonLat(evt.coordinate),
                author:'admin',
                description:"the very first marker",
                tags:["#first","#tags"],
                start_time:moment().format(),
                end_time:moment().format()
            };
            $.post( 'api/marker', JSON.stringify(body) )
                .done(resolve)
                .fail(reject)
        })
    }

    render(){
        console.log('render MAP!!!');
        var style={height:screen.availHeight};
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

