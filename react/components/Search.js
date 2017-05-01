import ChipInput from 'material-ui-chip-input'

export default class Search extends React.Component {

    state = {
        autocomplite: ['tags', 'different'],
        tags: []
    }
    chipAdd=(text)=>{
        //TODO for samtarter result use regexp
        var {tags} = this.state;
        var newValue = tags.concat(text.split(' ').filter(i=>!!i));
        this.setState({tags:newValue});
    }
    chipDelete=(chip, index)=>{
        var {tags} = this.state;
        tags.splice(index,1);
        this.setState({tags:tags});
    }

    render() {
        return (
            <ChipInput
                style={{overflow:"auto"}}
                fullWidth={true}
                value={this.state.tags}
                dataSource={this.state.autocomplite}
                onRequestAdd={this.chipAdd}
                onRequestDelete={this.chipDelete}
            />);
    }
}

