import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';

export default class  UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            isDialog:false
        }
    }

    login(e){
        location.assign("/auth/vkontakte");
    }

    logout(e){
        location.assign("/logout");
    }
    logIcons(){
        return [
            <IconButton
                iconClassName="fa fa-vk"
                onTouchTap={this.dialogAction.bind(this,'close')}
            />,
            <IconButton
                iconClassName="fa fa-facebook"
                onTouchTap={this.dialogAction.bind(this,'close')}
            />,
        ];
    }
    style(name) {
        switch (name) {
            case 'dialog':
                return {
                    width: '50%'
                }
            case 'icon':
                return{
                    width: "48px",
                    height: "48px",
                }
        }
    }
    dialogAction(cmd){
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
        console.log('render UserPassport');
        return !this.props.user ?<div>
                <FlatButton label="Enter" onTouchTap={ this.dialogAction.bind(this,'open') } />
                <Dialog
                title="Login"
                modal={false}
                contentStyle={this.style('dialog')}
                open={this.state.open}
                onRequestClose={this.dialogAction.bind(this,'close')}
            >
                    {this.logIcons()}
            </Dialog>
            </div>
            : <div>

            </div>
    }
}

