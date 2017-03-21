// import ol from 'openlayers'
import ol from 'openlayers/dist/ol-debug.js'

export default class Map{
    constructor(){
        super()
        this.mapInstance = createMap(elem);
    }
    createMap(elem){
            this.mapInstance = new ol.Map({
            layers: [new ol.layer.Tile({
                source: new ol.source.OSM()
            })],
            target: elem,
        });
        return this.mapInstance;

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
    addMarker(){
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
            name: 'first icon',
            info: this.state.info
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                src: 'img/icon1.png'
            }))
        });
        iconFeature.setStyle(iconStyle);
        return iconFeature;
    }
    deleteMarker(){

    }
    setView(){

    }

}