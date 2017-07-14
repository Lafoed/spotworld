// TODO infinite scroll
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import NewsItem from './NewsItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
    container:{
        zIndex:1000,
        display:"block",
        position:"absolute",
        left:20,
        top:70,
        width:"45%",
        backgroundColor:"rgba(250,250,250,0.9)",
    }
};

export default class News extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { open:true };
    }

    openEvent=event=>{
        var {toggleView, uiInput} = this.props.actions;
        toggleView('popup');
        uiInput( {chosenPopupId:event._id} )
    }

    render() {
        var events = this.props.request.events;
        return (
            <Paper style={style.container}>
                <div>
                    <DropDownMenu>
                        <MenuItem  primaryText="По расстоянию" />
                        <MenuItem  primaryText="По популярности" />
                    </DropDownMenu>
                </div>
                    {events.map( event =>
                        <NewsItem onChooseEvent={this.openEvent.bind(this,event)} key={event.objectId} event={event} />,
                        <Divider/>
                    )}
            </Paper>
        );
    }
}






