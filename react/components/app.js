import * as request from '../actions/data'

import Map from './map'
import Interface from './interface.js'

class App extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    getBrowserType(){
        var sBrowser, sUsrAg = navigator.userAgent;
        if( ~sUsrAg.indexOf("Chrome") ) {
            sBrowser = "Chrome";
        } else if ( ~sUsrAg.indexOf("Safari") ) {
            sBrowser = "Safari";
        } else if ( ~sUsrAg.indexOf("Opera") ) {
            sBrowser = "Opera";
        } else if ( ~sUsrAg.indexOf("Firefox") ) {
            sBrowser = "Firefox";
        } else if ( ~sUsrAg.indexOf("MSIE") ) {
            sBrowser = "IE";
        }
        this.props.dataAction.setData({browser:sBrowser});
    }

    render() {
        return <div>
            <Map/>
            <Interface/>
            </div>
    }
}


function mapStateToProps (state) {
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

