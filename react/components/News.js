
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
    },
};

export default class News extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { open:true };
    }


    render() {
        var events = this.props.request.events;
        return (
            <Paper style={styles.container}>
                <GridList
                    cellHeight={240}
                    cols={1}
                >
                    {events.map( ( event, i ) => (
                        <GridTile
                            key={i}
                            title={event.title}
                            subtitle={<span>by <b>{event.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                        >
                            <img src={event.img}/>
                        </GridTile>
                    ) )}
                </GridList>
            </Paper>
        );
    }
}






