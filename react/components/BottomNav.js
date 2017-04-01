import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="fa fa-clock-o"></FontIcon>;
const favoritesIcon = <FontIcon className="fa fa-heart"></FontIcon>;
const nearbyIcon = <IconLocationOn />;


export default class BottomNav extends Component {
    constructor(){
        super();
        this.state={
            selectedIndex: 0,
        }
    }

    select(index){
        this.setState({selectedIndex: index});
    }

    render() {
        return (
            <Paper zDepth={1} style={{margin:"-56px 0"}}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}
