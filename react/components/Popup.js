import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';


export default class Popup extends React.Component {
    state = {
        open: false,
    };
    style = {
        body:{},
        popup:{},
        modules:{
            marginTop:"20px"
        },
        title:{
            block:"none"
        },
        actionContainer:{
            borderTop:"none",
            marginTop:"-30px"
        }
    }

    handleClose = () => {
        this.props.closePopup();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
                <Dialog
                    titleStyle={this.style.title}
                    actionsContainerStyle={this.style.actionContainer}
                    actions={actions}
                    modal={false}
                    open={!!this.props.data}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <Paper style={this.style.modules}>modules</Paper>
                    <Paper style={this.style.modules}>modules</Paper>
                    <Paper style={this.style.modules}>modules</Paper>
                </Dialog>
        );
    }
}


class CardPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange(expanded) {
        this.setState({expanded: expanded});
    };

    handleToggle (event, toggle)  {
        this.setState({expanded: toggle});
    };

    handleExpand ()  {
        this.setState({expanded: true});
    };

    handleReduce ()  {
        this.setState({expanded: false});
    };

    render() {
        var {data} = this.props;
        return (
            <Card
                  expanded={this.state.expanded}
                  onExpandChange={this.handleExpandChange.bind(this)}>
                <CardHeader
                    title="UserName"
                    subtitle="avatar"
                    avatar="img/icon.png"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle.bind(this)}
                        labelPosition="right"
                        label="This toggle controls the expanded state of the component."
                    />
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="img/icon1.png" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand.bind(this)} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce.bind(this)} />
                </CardActions>
            </Card>)
    }
}

