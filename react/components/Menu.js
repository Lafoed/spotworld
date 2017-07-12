import Paper from 'material-ui/Paper';
import AddLocation from 'material-ui/svg-icons/maps/add-location';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

var style = {
    icon:{
        // height:30,
        // width:30,
    },
    btn:{
        margin:6,
        background:"white",
        borderRadius:"50%",
        // minWidth:36,
        // maxHeight:20,
        // border:"1px solid black",
    },
    panel:{
        padding:10,
        // maxHeight:48,
        // border:"1px solid black",
        // marginTop:10,
        display:'flex'
    }
}

export default class SideMenu extends React.Component {

    createMarker=()=>{
        if (!this.props.auth.user) return alert('no user');
        this.props.actions.toggleView("createMarker");
        this.toggleMenu();
    }


    render() {
        var user = this.props.auth.user;
        return (
            <div style={style.panel}>
                {
                    user?
                        <IconButton style={style.btn} onTouchTap={this.createMarker}>
                            <AddLocation style={style.icon}/>
                        </IconButton>
                        : null
                }
            </div>
        )

        // return (
        //     <div>
        //     <Drawer
        //         width={"30%"}
        //         open={isOpen}
        //         docked={false}
        //         onRequestChange={this.toggleMenu}
        //     >
        //         <MenuItem onTouchTap={this.createMarker}>Создать метку</MenuItem>
        //
        //     </Drawer>
        //     </div>)
    }
}



