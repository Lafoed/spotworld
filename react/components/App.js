import * as request from '../actions/data'

import Map from './Map'
import LeftMenu from './LeftMenu'
import Popup from './Popup'
import TimeSlider from './TimeSlider'
import UserCard from './UserCard'

import * as api from '../Actions/api'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return <div>
            <Map/>
            <LeftMenu/>
            <UserCard/>
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
        api: Redux.bindActionCreators(api, dispatch)
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

