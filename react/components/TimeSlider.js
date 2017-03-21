import InputRange from 'react-input-range'
import moment from 'moment'

export default class TimeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
            value2: 10,
            value3: 10,
            value4: {
                min: 5,
                max: 10,
            },
        };
    }

    render() {
        return <form><InputRange
            maxValue={20}
            minValue={0}
            formatLabel={value => `${value} kg`}
            value={this.state.value4}
            onChange={value => this.setState({value4: value})}
            onChangeComplete={value => console.log(value)}/>
        </form>
    }
}






