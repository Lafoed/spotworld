

export default class  UserCard extends React.Component {
    constructor(){
        super();
    }

    login(e){
        location.assign("/auth/vkontakte");
    }

    logout(e){
        location.assign("/logout");
    }

    render() {
        console.log('render UserPassport');
        return !this.props.user ?
            <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                Войти:
                <img src="/img/fb.png" className="enterIcon"></img>
                <img src="/img/vk.png" className="enterIcon" onClick={this.login}></img>
            </section>
            : <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                <img className="avatar" src={this.props.user.photo}></img>
                <button className="mdc-button mdc-button--theme-dark mdc-button--dense mdc-ripple-upgraded"
                        onClick={this.logout}>Выйти
                </button>
            </section>
    }
}