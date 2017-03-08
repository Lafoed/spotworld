import { render } from 'react-dom'


export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userPosition:[0,0]
        }
    }

    componentDidMount(){
        this.getUserLocation();
    }
    componentDidUpdate(){
        this.addMap();
    }

    getUserLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>this.setState({userPosition:[position.coords.longitude, position.coords.latitude ]}));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    addMap(){
        var map = new ol.Map({
            layers: [this.mapLayer(), this.vectorLayer()],
            target: document.getElementById('map'),
            view: new ol.View({
                center: ol.proj.fromLonLat(this.state.userPosition),
                zoom: 14
            })
        });

        var element = document.getElementById('popup');
        var popup = new ol.Overlay({
            element: element,
            positioning: 'bottom-center',
            stopEvent: false,
            offset: [0, -50]
        });
        map.addOverlay(popup);

        //map.on('click', this.mapClick.bind(this) );
        map.on('click', (evt)=>{
            console.log('map click');
            var feature = map.forEachFeatureAtPixel(evt.pixel,
                function(feature) {
                    return feature;
                });
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);
                //jquery bootstrap shit
                $(element).popover({
                    'placement': 'top',
                    'html': true,
                    'content': feature.get('name')
                });
                $(element).popover('show');
            } else {
                $(element).popover('destroy');
            }
            var body = {
                coords:[37,50],
                author:'id'
            };
            $.post( 'api/createMarker',body )
                .done(resp=>console.log(resp))
                .fail(err=>console.log('marker create fail'))
        } );
        var zoomslider = new ol.control.ZoomSlider();
        map.addControl(zoomslider);
    }

    mapLayer(){
        return new ol.layer.Tile({
            source: new ol.source.OSM()
        });
    }

    vectorLayer(){
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(this.state.userPosition)),
            name: 'first icon'
            //info get here
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                src: 'img/icon1.png'
            }))
        });

        iconFeature.setStyle(iconStyle);


        //var iconStyle = new ol.style.Style({
        //    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        //        anchor: [0.5, 46],
        //        anchorXUnits: 'fraction',
        //        anchorYUnits: 'pixels',
        //        src: 'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
        //    }))
        //});


        var vectorSource = new ol.source.Vector({
            features: [iconFeature]
        });

        return new ol.layer.Vector({
            source: vectorSource
        });
    }

    mapClick(evt){
        console.log('map click');
        var feature = map.forEachFeatureAtPixel(evt.pixel,
            function(feature) {
                return feature;
            });
        if (feature) {
            var coordinates = feature.getGeometry().getCoordinates();
            popup.setPosition(coordinates);
            $(element).popover({
                'placement': 'top',
                'html': true,
                'content': feature.get('name')
            });
            $(element).popover('show');
        } else {
            $(element).popover('destroy');
        }
        var body = {
            coords:[37,50],
            author:'id'
        };
        $.post( 'api/createMarker',body )
            .done(resp=>console.log(resp))
            .fail(err=>console.log('marker create fail'))

    }

    render(){
        console.log('render MAP!!!');
        var style={height:screen.availHeight};
        return <div>
            <div id="map" style={style}><div id="popup"></div></div>

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

