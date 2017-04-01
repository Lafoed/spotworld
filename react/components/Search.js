import ChipInput from 'material-ui-chip-input'

export default class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            tags: ['tags', 'different'],
            value:[]
        }
    }
    chipAdd(chip){
        var {value} = this.state;
        value.push(chip);
        this.setState({value:value});
    }
    chipDelete(chip, index){
        var {value} = this.state;
        value.slice(index,1);
        this.setState({value:value});
    }

    render() {
        return (
            <ChipInput
                value={this.state.value}
                dataSource={this.state.tags}
                onRequestAdd={this.chipAdd.bind(this)}
                onRequestDelete={this.chipDelete.bind(this)}
            />);
    }
}

