
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    container:{
        zIndex:1000,
        display:"block",
        position:"absolute",
        left:20,
        top:90,
        width:"40%",
        padding:10
    }
};

export default class News extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { open:true };
    }

    eventRender=event=>(
        <div style={{fontSize:10}}>
            <div>{moment(event.end_time).format('MM.DD HH:mm')}</div>
            <div>{moment(event.start_time).format('MM.DD HH:mm')}</div>
            <div>{event.tags.concat(',')}</div>
            <div>{event.title}</div>
            <div>{event.author}</div>
            <img src={event.img}/>
        </div>

    )

    render() {
        var events = this.props.request.events;
        return (
            <Paper style={styles.container}>
                <GridList
                    cellHeight={240}
                    cols={1}
                >
                    {events.map( event => (
                        <GridTile
                            key={event._id}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                            children={this.eventRender(event)}
                        />
                    ) )}
                </GridList>
            </Paper>
        );
    }
}






