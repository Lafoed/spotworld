import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

export default class SideMenu extends React.Component {
    constructor(props){
        super();
        this.state={
            open:false
        }
    }
    close=()=>this.setState({open:false})
    open=()=>this.setState({open:true})
    createMarker=()=>{
        this.props.uiActions.switchMarkerMode();
        this.close();
    }


    render() {
        return (
            <div>
                <IconButton
                    iconClassName="fa fa-bars"
                    onTouchTap={this.open}
                    iconStyle={{
                        width: 36,
                        height: 36,
                    }}
                    style={{
                        width: 72,
                        height: 50,
                        padding: 16,
                    }}
                />
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem onTouchTap={this.createMarker}>Создать метку</MenuItem>
                <MenuItem onTouchTap={this.close}>Menu Item 2</MenuItem>
            </Drawer>
            </div>)
    }
}



