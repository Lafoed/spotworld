import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import DropDownMenu from 'material-ui/DropDownMenu';

var style = {
    menu:{
        marginRight:"0"
    },
    dialog:{
        width: 'auto',
        textAlign:"center"
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
    state = {
        isDialog:false,
        value:1,
        password:'',
        username:''
    }

    handleChange (event, index, value){
        return this.setState({value});
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

    textInput(field,evt){
        this.setState({[field]:evt.target.value});
    }

    loginFB=()=>{
        this.props.actions.loginFB()
    }

    loginVK=()=>{
        this.props.actions.loginVK()
    }

    enter=()=>{
        this.props.actions.login(this.state)
    }

    logout=()=>{
        Parse.User.logOut().then(()=>location.reload(), console.error )
    }

    render() {
        var {user} = this.props.auth;
        if (user){
            var username = user.getUsername();
            var userphoto = user.get("photo");
        }
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
                    <TextField floatingLabelText={"login"} onChange={this.textInput.bind(this,'username')}/><br/>
                    <TextField floatingLabelText={"password"} onChange={this.textInput.bind(this,'password')}/><br/>
                    <FlatButton label={"enter"} onTouchTap={this.enter}/>
                    <IconButton
                        key={Math.random()}
                        iconClassName="fa fa-vk"
                        onTouchTap={this.loginVK}
                    />
                    <IconButton
                        key={Math.random()}
                        iconClassName="fa fa-facebook"
                        onTouchTap={this.loginFB}
                    />
            </Dialog>
            </div>)
            : <IconMenu
                style={style.menu}
                iconButtonElement={
                        <FlatButton
                            style={style.button}
                            label={username}
                            labelPosition="before"
                            primary={true}
                            icon={<Avatar src={userphoto}/>}
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

