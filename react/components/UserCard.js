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
                key={Math.random()}
                iconClassName="fa fa-vk"
                onTouchTap={this.login}
            />,
            <IconButton
                key={Math.random()}
                iconClassName="fa fa-facebook"
                onTouchTap={this.dialogAction.bind(this,'close')}
            />,
        ];
    }
    style(name) {
        switch (name) {
            case 'dialog':
                return {
                    width: 'auto',
                    textAlign:"center",
                    maxWidth:"30%"
                }
            case 'icon':
                return{
                    width: "48px",
                    height: "48px",
                }
            case 'title':
                return{
                    textAlign:"center"
                }
        }
    }
    dialogAction(cmd){
        switch (cmd){
            case 'open':
                this.setState({isDialog:true});
                break;
            case "close":
                this.setState({isDialog:false});
                break;
            default:
                this.setState({isDialog:!this.state.isDialog});

        }
    }

    render() {
        console.log('render UserPassport');
        return !this.props.user ?(
            <div>
                <FlatButton label="Enter" onTouchTap={ this.dialogAction.bind(this,'open') } />
                <Dialog
                title="Login"
                modal={false}
                contentStyle={this.style('dialog')}
                open={this.state.isDialog}
                titleStyle={this.style('title')}
                onRequestClose={this.dialogAction.bind(this,'close')}
            >
                    {this.logIcons()}
            </Dialog>
            </div>)
            : <div>
                авторизашка всегда няшка
            </div>
    }
}

