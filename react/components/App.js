import Map from './Map'
import Header from './Header'
import SideMenu from './SideMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'

import * as request from '../Actions/request'
import * as ui from '../Actions/ui'
import * as map from '../Actions/map'




class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.request.api('user');
        this.props.request.api('markers');
        this.props.ui.getUserLocation();
    }

    render() {
        debugger;
        return <div>
            <Map markers={this.props.api.markers} userLocation={this.props.ui.userLocation}/>
            <Header/>
            <SideMenu/>
            <Popup/>
            <TimeSlider/>
        </div>
    }
}




function mapStateToProps (state) {
    let {api,ui,map} = state;
    debugger;
    return {
        api: api,
        userLocation: ui.userLocation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch),
        ui: Redux.bindActionCreators(ui, dispatch),
        map: Redux.bindActionCreators(map, dispatch),
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

