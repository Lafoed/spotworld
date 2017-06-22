// TODO infinite scroll
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    container:{
        zIndex:1000,
        display:"block",
        position:"absolute",
        left:20,
        top:70,
        width:"40%",
        padding:10
    },
    description:{
        fontSize:16,
        textAlign:"center"
    },
    nextIcon:{
        float:"right"
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

    eventRender = event=>(
        <GridList
            cellHeight={160}
            cols={3}
        >
            <GridTile  style={styles.tile}>
                    <img src={event.img}/>
            </GridTile >

            <GridTile cols={2} style={styles.description}>
                <div>Description</div>
                <div>{moment( event.end_time ).format( 'MM.DD HH:mm' )}</div>
                <div>{moment( event.start_time ).format( 'MM.DD HH:mm' )}</div>
                <div>{event.tags.concat( ',' )}</div>
                <div>{event.title}</div>
                <div>{event.author}</div>
                <NextIcon style={styles.nextIcon}/>
            </GridTile>
        </GridList>


    )

    render() {
        var events = this.props.request.events;
        return (
            <Paper style={styles.container}>
                <GridList
                    cellHeight={160}
                    cols={1}
                    padding={10}
                >
                    {events.map( event => (
                        <GridTile
                            onTouchTap={this.openEvent.bind(this,event)}
                            className="event_news"
                            key={event.objectId}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                            children={this.eventRender(event)}
                        />
                    ) )}
                </GridList>
            </Paper>
        );
    }
}






