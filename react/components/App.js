import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import BottomNav from './BottomNav'
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
        return <div>
            <Map {...this.props}/>
            <Header>
                <SideMenu {...this.props}/>
                <Search/>
                <UserCard {...this.props}/>
            </Header>
            <Popup {...this.props}/>
            <TimeFilter/>
        </div>
    }
}

function mapStateToProps (state) {
    var {request,ui} = state;
    return {...request,...ui}
}

function mapDispatchToProps(dispatch) {
    return {
        reqActions: Redux.bindActionCreators(reqActions, dispatch),
        uiActions: Redux.bindActionCreators(uiActions, dispatch),
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

