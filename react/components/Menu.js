import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideMenu extends React.Component {

    createMarker=()=>{
        if (!this.props.request.user) return alert('no user');
        this.props.actions.toggleState("markerMode");
        this.toggle();
    }

    toggle=()=>{
        this.props.actions.toggleView('menu');
    }


    render() {
        var isOpen = this.props.view.menu;

        return (
            <div>
            <Drawer
                width={"50%"}
                open={isOpen}
                docked={false}
                onRequestChange={this.toggle}
            >
                <MenuItem onTouchTap={this.createMarker}>Создать метку</MenuItem>

            </Drawer>
            </div>)
    }
}



