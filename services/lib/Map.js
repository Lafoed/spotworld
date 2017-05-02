// import ol from 'openlayers'
import ol from 'openlayers/dist/ol-debug.js'

export default class Map {
    constructor(elem) {
        this.map = this.createMap(elem);
    }

    createMap(elemId) {
        //config map here
        return new ol.Map({
            view: new ol.View({
                center: [30,50],
                zoom: 4
            }),
            layers: [
                // new ol.layer.Tile({
                //     source: new ol.source.OSM()
                // }),
                new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFmb2VkIiwiYSI6ImNqMHA2MHk5ODAwMDgzMnFxamQyNmVha3IifQ.8r9fW0pPDrNW7iwBqkVhhg'
                        })
                }),
                new ol.layer.Vector({
                    source: new ol.source.Vector(),
                    name:'markers'
                })
            ],
            target: elemId,
        });
    }

    addMarker(coords, id) {
        var marker = this.createMarker(coords, id);

        var vectorLayer = this.getLayer("markers");

        var source = vectorLayer.getSource();

        source.addFeature(marker);
    }

    getLayer(name){
        var layers = this.map.getLayers().getArray();
        return layers.find(layer=>layer.getProperties().name === name)

    }

    createMarker(coords, id){
        var marker = new ol.Feature({
            geometry: new ol.geom.Point(this.coordsTransform(coords))
        });
        var markerStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                src: 'img/icon.png',
                scale: 0.7
            }))
        });
        marker.setStyle(markerStyle);
        marker.setId(id);
        return marker;
    }

    setView(coords, zoom) {
        var view = this.map.getView();
        view.animate({
            center: this.coordsTransform(coords),
            zoom: zoom
        });
    }

    coordsTransform(coords){
        //TODO shit method
        if ( coords[0]>180 ) return coords;
        return ol.proj.fromLonLat(coords);
    }

    getFeatures(pixel){
        return this.map.forEachFeatureAtPixel(pixel, feature => feature);
    }

    getCoords(coords){
        //TODO shit method
        var pixelCoords = this.map.getPixelFromCoordinate(coords);
        var resultCoords = this.map.getCoordinateFromPixel(pixelCoords);
        return resultCoords;
    }

    on(name,cb){
        this.map.on(name, cb.bind(this, this));
    }

}