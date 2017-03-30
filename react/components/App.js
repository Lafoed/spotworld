import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'
import UserCard from './UserCard'
import Search from './Search'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


import * as request from '../Actions/request'
import * as ui from '../Actions/ui'
import * as map from '../Actions/map'




class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        // this.props.request.api('user');
        // this.props.request.api('markers');
        // this.props.ui.getUserLocation();
    }

    render() {
        return <div>
            <Map markers={this.props.api.markers} userLocation={this.props.ui.userLocation}/>
            <Toolbar className="toolbar-header">
                <ToolbarGroup>
                    <SideMenu firstChild={true}/>
                </ToolbarGroup>

                <ToolbarGroup>
                    <Search/>
                </ToolbarGroup>

                <ToolbarGroup lastChild={true}>
                    <UserCard/>
                </ToolbarGroup>
            </Toolbar>
            {/*<Popup/>*/}
            {/*<TimeSlider/>*/}
        </div>
    }
}




function mapStateToProps (state) {
    let {api,ui,map} = state;
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

