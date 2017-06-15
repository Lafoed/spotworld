import Drawer from 'material-ui/Drawer';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    container:{
        display:"inline-block",
        height: screen.availHeight-190,
        width:"50%",
        overflowY:"auto",
        overflowX:"hidden"
    },
    gridList:{
        overflow:"none",
    }
};

export default class News extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { open:true };
    }


    render() {
        var events = this.props.request.events;
        return (
            <div style={styles.container}>
                <GridList
                    style={styles.gridList}
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
            </div>
        );
    }
}






