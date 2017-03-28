import Map from './Map'
import LeftMenu from './LeftMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'
import UserCard from './UserCard'

import * as request from '../Actions/request'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        //TODO refact this urls inside in req lib middleware
        this.props.request.api('api/marker');
        this.props.request.api('api/user');
    }

    render() {
        return <div>
            <Map/>
            <LeftMenu/>
            {/*<UserCard/>*/}
            <Popup/>
            <TimeSlider/>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch)
    }
}
export default ReactRedux.connect(state=>{return {...state}}, mapDispatchToProps)(App)

