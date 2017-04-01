import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import BottomNav from './BottomNav'
import UserCard from './UserCard'
import Search from './Search'

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';


import * as request from '../Actions/request'
import * as uiAction from '../Actions/ui'


class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.request.api('user');
        this.props.request.api('markers');
        this.props.uiAction.getUserLocation();
    }

    render() {
        return <div>
            <Map {...this.props.map}/>
            <Toolbar className="toolbar-header"
                    style={{maxHeight: "120px", height:"auto"}}>
                <ToolbarGroup>
                    <SideMenu firstChild={true}/>
                </ToolbarGroup>

                <ToolbarGroup
                    style={{width:"100%",overflow:"auto"}}
                >
                    <Search/>
                </ToolbarGroup>

                <ToolbarGroup lastChild={true}>
                    <UserCard {...this.props.user}/>
                </ToolbarGroup>
            </Toolbar>
            {/*<Popup/>*/}
            <BottomNav/>
        </div>
    }
}

function mapStateToProps (state) {
    var {api,ui} = state;
    return {
        map: {markers:api.markers, userLocation:ui.userLocation},
        user: {user:api.user}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch),
        uiAction: Redux.bindActionCreators(uiAction, dispatch),
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

