
import InputRange from "react-input-range";


export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        var now = moment().hour()*60;
        var now3 = now+180;
        this.state = {
            values: { min: now, max: now3>1439?1439:now3 },
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(values) {
        this.setState({ values });
    }

    formatLabel(value){
        console.log(value);
        var time = moment().set('hour',0).set('minutes',value);
        return `${time.format('HH:mm')}`
    }

    render() {

        return <div id="slider">
            <InputRange
                maxValue={1439}
                minValue={0}
                formatLabel={this.formatLabel.bind(this)}
                value={this.state.values}
                onChange={this.handleChange} />
        </div>
    }
}





