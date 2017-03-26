

export default class  UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
    }

    componentDidMount(){
        $.get('/getUser')
            .done(user=>this.setState({user:user}))
            .fail(err=>console.error(err));
    }

    login(e){
        location.assign("/auth/vkontakte");
    }

    logout(e){
        location.assign("/logout");
    }

    render() {
        console.log('render UserPassport');
        return !this.state.user ?
            <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                Войти:
                <img src="/img/fb.png" className="enterIcon"></img>
                <img src="/img/vk.png" className="enterIcon" onClick={this.login.bind(this)}></img>
            </section>
            : <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                <img className="avatar" src={this.state.user.photo}></img>
                <button className="mdc-button mdc-button--theme-dark mdc-button--dense mdc-ripple-upgraded"
                        onClick={this.logout.bind(this)}>Выйти
                </button>
            </section>
    }
}