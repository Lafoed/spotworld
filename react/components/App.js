import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import UserCard from './UserCard'
import Search from './Search'
import Header from './Header'
import TimeFilter from './TimeFilter'

import * as reqActions from '../Actions/request'
import * as uiActions from '../Actions/ui'


class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.reqActions.get('user');
        this.props.reqActions.get('markers');
        this.props.uiActions.getUserLocation();
    }

    render() {
        var {map, uiActions, reqActions, popup, user} = this.props;
        return <div>
            <Map {...map}{...uiActions}{...reqActions}/>
            <Header>
                <SideMenu {...uiActions}/>
                <Search/>
                <UserCard {...user}/>
            </Header>
            <Popup {...popup}{...uiActions}/>
            <TimeFilter/>
        </div>
        return <div>
            <TimeFilter/>
        </div>
    }
}

function mapStateToProps (state) {
    var {request,ui} = state;
    return {
        map: {...request,...ui},
        user: {...request},
        popup: {...ui},
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reqActions: Redux.bindActionCreators(reqActions, dispatch),
        uiActions: Redux.bindActionCreators(uiActions, dispatch),
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

