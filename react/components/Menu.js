import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideMenu extends React.Component {

    createMarker=()=>{
        if (!this.props.auth.user) return alert('no user');
        this.props.actions.toggleView("createMarker");
        this.toggleMenu();
    }

    toggleMenu=()=>{
        this.props.actions.toggleView('menu');
    }


    render() {
        var isOpen = this.props.view.menu;

        return (
            <div>
            <Drawer
                width={"30%"}
                open={isOpen}
                docked={false}
                onRequestChange={this.toggleMenu}
            >
                <MenuItem onTouchTap={this.createMarker}>Создать метку</MenuItem>

            </Drawer>
            </div>)
    }
}



