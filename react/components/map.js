import moment from "moment"
import {Card, CardTitle, Icon, Button, CardActions } from 'react-mdl'
import { render } from 'react-dom'
import InfoWindow from './infoWindow'

export default class Map extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('component did mount');
        var map = this.addMap();
        var markers = this.getMarkers();
        this.addMarkers(markers, map);
    }
    addMap(){
        const centerOfMap = {
            lat: 55.7702012,
            lng: 37.6024752
        };
        if(centerOfMap) {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: new google.maps.LatLng(centerOfMap.lat, centerOfMap.lng),
                disableDefaultUI: true,
                zoomControl: true,
                // gestureHandling: 'greedy',
                // mapTypeControl: false,
                // scaleControl: false,
                // streetViewControl: true,
                // rotateControl: false
            });

            return map;
        }
    }
    addMarkers(markers, map){
        markers.forEach(marker=>{
            var {lat, lng} = marker.coords;
            var { title, description, time } = marker;
            var newDiv = document.createElement("div");
            newDiv.innerHTML = "<h1>Привет!</h1>";


            var infowindow = new google.maps.InfoWindow({
                content: newDiv
            });

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                icon: 'img/svg/map_googl.svg',
                title:title
            });

            marker.setMap(map);

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        });
    }

    renderInfoWindow(){
        return <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                <h4 style={{marginTop: '0'}}>
                    Featured event:<br />
                    May 24, 2016<br />
                    7-11pm
                </h4>
            </CardTitle>
            <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                <div className="mdl-layout-spacer"></div>
                <Icon name="event" />
            </CardActions>
        </Card>
    }

    getMarkers(){
        $.get('/api/markers')
        return [{
            coords:{
                lat:55.7702012,
                lng:37.6024752
            },
            title:'first marker',
            description:'very very first marker',
            time:moment()
        }]
    }

    render(){
        console.log('render MAP!!!');
        //check component view state
        var style={height:screen.availHeight};
        return <div id="map" style={style}></div>
        // return <div className="map_panel" id="map_canvas" >
        //     <div id="map_canvas1"><img src="img/map_example.jpg" className="max_example" alt=""/></div>
        // </div>
    }
}


function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}
// export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Map)

