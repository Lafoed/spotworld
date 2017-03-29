import Map from './Map'
import Header from './Header'
import SideMenu from './SideMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'

import * as api from '../Actions/api'

class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.request.api('user');
        this.props.request.api('marker');
    }

    render() {
        debugger;
        return <div>
            <Map/>
            <Header/>
            <SideMenu/>
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

