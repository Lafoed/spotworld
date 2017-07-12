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
        this.props.actions.toggleView("createMarker");
    }


    render() {
        var user = this.props.auth.user;
        return user ? (
            <div style={style.panel}>
                <IconButton style={style.btn} onTouchTap={this.createMarker}>
                    <AddLocation style={style.icon}/>
                </IconButton>
            </div>
        ) : null

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



