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
    menuAction(cmd){
        switch (cmd){
            case 'open':
                this.setState({open:true});
                break;
            case "close":
                this.setState({open:false});
                break;
            default:
                this.setState({open:!this.state.open});

        }
    }

    render() {
        return (
            <div>
                <IconButton
                    iconClassName="fa fa-bars"
                    onTouchTap={this.menuAction.bind(this,'open')}
                    iconStyle={{
                        width: 36,
                        height: 36,
                    }}
                    style={{
                        width: 72,
                        height: 72,
                        padding: 16,
                    }}
                />
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem onTouchTap={this.menuAction.bind(this,'close')}>Menu Item</MenuItem>
                <MenuItem onTouchTap={this.menuAction.bind(this,'close')}>Menu Item 2</MenuItem>
            </Drawer>
            </div>)
    }
}



