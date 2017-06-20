
export default class MapReact extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state={
            events:true,
            location:true,
        }
    }

    componentDidMount() {
        this.props.actions.createMap();
        this.props.actions.setUserLocation();
        this.props.actions.addMarkers({events:this.props.request.events, popupRender:this.renderPopup});

        // this.map.on( 'click', this.mapClick.bind( this ) );
        // this.map.on( 'click', this.props.actions.mapClick );
    }

    componentWillReceiveProps( props ){
        var { userLocation } = props.ui;
        var { events } = props.request;
        if (this.props.map.mapInstance != props.map.mapInstance){
            props.map.mapInstance.on('popupopen', wtf=>{
                console.log('open popup');
            } );
            props.map.mapInstance.on('move', wtf=>{
                console.log('move !')
                // this.props.actions.openEvent({id:wtf.popup._source.id})
            } );
        }
        // if ( events.length && this.state.events ){
        //     this.setState( {events:false} )
        //
        //     events.forEach( event => {
        //         this.map.addMarker(event.coords, event._id);
        //     });
        // }
        //
        // if ( userLocation[0]!=0 && this.state.location ) {
        //     this.setState({location:false})
        //     this.map.setView(userLocation, 8);
        // }

    }

    renderPopup=(event)=>(
        <div>
            <div>{moment(event.end_time).format('MM.DD HH:mm')}</div>
            <div>{moment(event.start_time).format('MM.DD HH:mm')}</div>
            <div>{event.tags.concat(',')}</div>
            <div>{event.title}</div>
            <div>{event.author}</div>
            <img style={{maxWidth:50}} src={event.img}/>
        </div>
    )


    mapClick(Map, evt) {
        var { actions, ui } = this.props;
        if ( ui.markerMode ){
            actions.setUiState( "coordsClick", evt.coordinate );
            actions.toggleState( "constructorOpen" );
            actions.toggleState( "markerMode" );
            return;
        }
        var feature = Map.getFeatures(evt.pixel);
        if ( !feature ) return;
        // this.map.setView( feature.getGeometry().flatCoordinates );

        var id = feature.getId();
        if ( !id ) return;

        actions.setUiState('popupId',id);
        actions.toggleState("popupOpen");
    }


    render() {
        return (
                <div
                    id="map"
                    style={{position:"fixed", height: document.documentElement.clientHeight, width:"100%"}}
                    className={this.props.ui.markerMode?"cursorMarker":""}
                ></div>
            )
    }
}




