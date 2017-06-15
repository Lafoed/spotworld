import ChipInput from 'material-ui-chip-input'
//TODO autocomplite tags when db is ready
export default class Tags extends React.Component {

    state = {
        tags: []
    }

    chipAdd=(text)=>{
        //TODO for samtarter result use regexp
        var {tags} = this.state;
        var newValue = tags.concat(text.split(' ').filter(i=>!!i));
        this.setState({tags:newValue}, ()=>this.props.tagsListener(this.state.tags) );
    }
    chipDelete=(chip, index)=>{
        var {tags} = this.state;
        tags.splice(index,1);
        this.setState({tags:tags}, ()=>this.props.tagsListener(this.state.tags) );
    }

    render() {
        return (
            <ChipInput
                hintText={"tags"}
                fullWidth={true}
                value={this.state.tags}
                onRequestAdd={this.chipAdd}
                onRequestDelete={this.chipDelete}
            />);
    }
}

