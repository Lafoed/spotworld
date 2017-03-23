

export default class  UserCard extends React.Component {
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
        console.log(this.state.user);
        return !this.state.user ?
            <div className="mdc-card user-card">
                <section className="mdc-card__primary">
                    <h2 className="mdc-card__subtitle">Войти с помощью:</h2>
                </section>
                <section className="mdc-card__actions">
                    <button className="mdc-fab mdc-fab--mini material-icons vk" onClick={this.login.bind(this)}></button>
                    <button className="mdc-fab mdc-fab--mini material-icons fb" onClick={this.login.bind(this)}></button>
                </section>
            </div>
            : <div className="mdc-card user-card user-card--with-avatar">
                <section className="mdc-card__primary">
                    <div className="user-card__avatar"><img src={this.state.user.photo}></img></div>
                    <h1 className="mdc-card__title ">{this.state.user.username}</h1>
                    <h2 className="mdc-card__subtitle"><button className="mdc-button mdc-button--theme-dark mdc-button--dense mdc-ripple-upgraded" onClick={this.logout.bind(this)}>Выйти</button></h2>
                </section>
            </div>
    }
}