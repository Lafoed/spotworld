import Map from './Map'
import Header from './Header'
import SideMenu from './SideMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'

import * as request from '../Actions/request'

class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.request.api('user');
        this.props.request.api('marker');
    }

    render() {
        return <div>
            {/*<Map/>*/}
            <Header/>
            <SideMenu/>
            <Popup/>
            <TimeSlider/>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        api: state.api
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch)
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

