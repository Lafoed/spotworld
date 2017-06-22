import Map from './Map'
import Menu from './Menu'
import Popup from './Popup'
import UserCard from './UserCard'
import Tags from './Tags'
import Header from './Header'
import TimeFilter from './TimeFilter'
import News from './News'
import Constructor from './Constructor'


import * as reqActions from '../Actions/request'
import * as uiActions from '../Actions/ui'
import * as mapActions from '../Actions/map'


// FB.getLoginStatus(function(response) {
//     console.log(response);
//     if (response.status==="not_authorized"){
//         FB.login()
//     }
// });

class App extends React.Component {

    componentDidMount(){
        this.props.actions.getAllEvents();


        // this.props.actions.get('events');
        // this.props.actions.getUserLocation();
    }

    render() {
        return <div>
            <Header {...this.props}>
                <Menu {...this.props}/>
                <Tags/>
                <UserCard {...this.props}/>
            </Header>
            <Map {...this.props}/>
            <News {...this.props}/>
            <Popup {...this.props}/>
            <Constructor {...this.props}/>
        </div>
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions:{
            ...Redux.bindActionCreators(reqActions, dispatch),
            ...Redux.bindActionCreators(uiActions, dispatch),
            ...Redux.bindActionCreators(mapActions, dispatch),
        }
    }
}
export default ReactRedux.connect(state=>state, mapDispatchToProps)(App)


