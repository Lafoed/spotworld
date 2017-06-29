import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import DropDownMenu from 'material-ui/DropDownMenu';

var style = {
    menu:{
        marginRight:"0"
    },
    dialog:{
        width: 'auto',
        textAlign:"center",
        maxWidth:"30%"
    },
    icon:{
        width: "48px",
        height: "48px",
    },
    title:{
        textAlign:"center"
    },
    button:{
        width: `100%`,
        color: `black`,
        whiteSpace: `nowrap`,
        overflow:`none`,
        height: `auto`
    }
}

export default class  UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            isDialog:false,
            value:1
        }
    }

    login(){
        location.assign("/auth/vkontakte");
    }

    logout(){
        location.assign("/auth/logout");
    }

    handleChange (event, index, value){
        return this.setState({value});
    }

    loginFB=()=>{
        this.props.actions.loginWithFB()
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

    renderIcons(){
        return [
            <IconButton
                key={Math.random()}
                iconClassName="fa fa-vk"
                onTouchTap={this.login}
            />,
            <IconButton
                key={Math.random()}
                iconClassName="fa fa-facebook"
                onTouchTap={this.loginFB}
            />
        ];
    }

    render() {
        var {user} = this.props.request;
        return !user ?(
            <div>
                <FlatButton label="ВОЙТИ" onTouchTap={ this.dialogAction.bind(this,'open') } />
                <Dialog
                title="ВОЙТИ"
                modal={false}
                contentStyle={style.dialog}
                open={this.state.isDialog}
                titleStyle={style.title}
                onRequestClose={this.dialogAction.bind(this,'close')}>
                    {this.renderIcons()}
            </Dialog>
            </div>)
            : <IconMenu
                style={style.menu}
                iconButtonElement={
                        <FlatButton
                            style={style.button}
                            label={user.username}
                            labelPosition="before"
                            primary={true}
                            icon={<Avatar src={user.photo}/>}
                        />}
                open={this.state.openMenu}
                onRequestChange={this.handleOnRequestChange}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem onTouchTap={this.logout} primaryText="Выйти"/>
            </IconMenu>
    }
}

