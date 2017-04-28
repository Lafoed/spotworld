import Map from './Map'
import SideMenu from './SideMenu'
import Popup from './Popup'
import UserCard from './UserCard'
import Search from './Search'
import Header from './Header'
import TimeFilter from './TimeFilter'
import Constructor from './Constructor'


import * as reqActions from '../Actions/request'
import * as uiActions from '../Actions/ui'



class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.actions.get('user');
        this.props.actions.get('markers');
        this.props.actions.getUserLocation();
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
            <Constructor {...this.props}/>
            <TimeFilter/>
        </div>
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions:{
            ...Redux.bindActionCreators(reqActions, dispatch),
            ...Redux.bindActionCreators(uiActions, dispatch),
        }
    }
}
export default ReactRedux.connect(state=>state, mapDispatchToProps)(App)

