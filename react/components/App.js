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
import * as authActions from '../Actions/auth'

Parse.initialize("spotwolrdappid");
Parse.serverURL = 'https://spotworld.dimkk.ru/parse';
window.fbAsyncInit = function() {
    FB.init({ // this line replaces FB.init({
        appId      : '198503764011682', // Facebook App ID
        status     : true,
        cookie     : true,  // enable cookies to allow Parse to access the session
        xfbml      : true,  // initialize Facebook social plugins on the page
        version    : 'v2.3' // point to the latest Facebook Graph API version
    });
};
VK.init({
    apiId: 5922563
});


class App extends React.Component {

    componentDidMount(){
        this.props.actions.checkAuth();
        this.props.actions.getAllEvents();
    }

    render() {
        return <div>
            <Map {...this.props}/>
            <Header {...this.props}>
                <Menu {...this.props}/>
                <Tags/>
                <UserCard {...this.props}/>
            </Header>
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
            ...Redux.bindActionCreators(authActions, dispatch),
        }
    }
}
export default ReactRedux.connect( state=>state, mapDispatchToProps )( App )


