

export default class UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
    }

    componentDidMount(){
        $.get('/getUser')
            .done(user=>{
                console.log('USSEEERRR');
                console.dir(user);
                this.setState({user:user})
            })
            .fail(err=>console.error(err));
    }

    login(e){
        location.assign("/auth/vkontakte");
    }

    logout(e){
        location.assign("/logout");
    }

    render(){
        console.log('render UserPassport');
        var style = {
            top: "10px",
            left: "60px",
            position: "absolute",
            background: "white",
        };
        return !this.state.user ?
            <div className="mdc-card" style={style}>
                <section className="mdc-card__primary">
                    <h1 className="mdc-card__title mdc-card__title--large">UserPassport</h1>
                    <h2 className="mdc-card__subtitle">Авторизируйтесь</h2>
                </section>
                <section className="mdc-card__supporting-text">
                    text
                </section>
                <section className="mdc-card__actions">
                    <button className="mdc-button mdc-button--compact mdc-card__action" onClick={this.login.bind(this)}>Войти через вк</button>
                </section>
            </div>
            : <div className="mdc-card" style={style}>
                <section className="mdc-card__primary">
                    <div className="demo-card__avatar"><img src={this.state.user.photo}></img></div>
                    <h1 className="mdc-card__title mdc-card__title--large">UserPassport</h1>
                    <h2 className="mdc-card__subtitle">Вы авторизованны</h2>
                </section>
                <section className="mdc-card__supporting-text">
                    text
                </section>
                <section className="mdc-card__actions">
                    <button className="mdc-button mdc-button--compact mdc-card__action" onClick={this.logout.bind(this)}>Выйти</button>
                </section>
            </div>
    }
}