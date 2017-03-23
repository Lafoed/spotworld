
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import moment from "moment";

export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        var now = moment().hour()*60;
        this.state = {
            values: { min: now, max: now+180 },
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
        var style = {
            position:"absolute",
            bottom:"20px",
            width:"60%",
            background:"whitesmoke",
            borderRadius:"15px",
            padding:"25px",
            margin: "0 20%"
        }
        return <div style={style} id="slider">
            <InputRange
                maxValue={1440}
                minValue={0}
                formatLabel={this.formatLabel.bind(this)}
                value={this.state.values}
                onChange={this.handleChange} />
        </div>
    }
}





