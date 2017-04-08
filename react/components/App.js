import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import BottomNav from './BottomNav'
import UserCard from './UserCard'
import Search from './Search'
import Header from './Header'
import TimeFilter from './TimeFilter'

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
        var {map, uiAction, popup, user} = this.props;
        return <div>
            <Map {...map}{...uiAction}/>
            <Header>
                <SideMenu firstChild={true} {...uiAction}/>
                <Search/>
                <UserCard {...user}/>
            </Header>
            <Popup {...popup}{...uiAction}/>
            <TimeFilter/>
            {/*<BottomNav/>*/}
        </div>
    }
}

function mapStateToProps (state) {
    var {api,ui} = state;
    return {
        map: {...api,...ui},
        user: {...api},
        popup: {...ui},
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch),
        uiAction: Redux.bindActionCreators(uiAction, dispatch),
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

