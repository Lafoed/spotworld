import * as request from '../actions/data'

import Map from './Map'
import LeftMenu from './LeftMenu'
import Popup from './Popup'
import TimeLine from './TimeLine'
import UserCard from './UserCard'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Map/>
            <LeftMenu/>
            <UserCard/>
            <Popup/>
            <Timeline/>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        request: Redux.bindActionCreators(request, dispatch)
    }
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

