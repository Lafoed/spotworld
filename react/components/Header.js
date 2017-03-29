import UserCard from './UserCard'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Header extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <Toolbar>

                <ToolbarGroup>
                    <ToolbarTitle text="Title"/>
                </ToolbarGroup>

                <ToolbarGroup>
                    <ToolbarTitle text="Title2"/>
                     <ToolbarSeparator/>
                    <ToolbarTitle text="Title3"/>
                </ToolbarGroup>
                <ToolbarSeparator/>
                <ToolbarGroup>
                    <ToolbarTitle text="Title4"/>

                    <ToolbarTitle text="Title5"/>
                </ToolbarGroup>
            </Toolbar>
        );

    }
}



