import UserCard from './UserCard'

export default class LeftMenu extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
        document.querySelector('.demo-menu').addEventListener('click', evt =>{
            drawer.open = true;
        });
    }

    render() {
        return <div>
            <div className="mdc-toolbar mdc-toolbar--fixed">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <button className="demo-menu material-icons">menu</button>
                </section>
                {/*search field*/}
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <i className="material-icons" >search</i>
                    <div className="mdc-textfield mdc-textfield--fullwidth mdc-theme-dark">
                        <input className="mdc-textfield__input "
                               type="text"
                               placeholder="Поиск адреса"
                               />
                    </div>
                </section>
                <UserCard></UserCard>
            </div>

            <aside className="mdc-temporary-drawer">
                <nav className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                            Header here
                        </div>
                    </header>
                    <nav className="mdc-temporary-drawer__content mdc-list-group">
                        <div id="icon-with-text-demo" className="mdc-list">
                            <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                                <i className="material-icons mdc-list-item__start-detail" >inbox</i>Inbox
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" >star</i>Star
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" >send</i>Sent Mail
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" >drafts</i>Drafts
                            </a>
                        </div>

                        <hr className="mdc-list-divider"/>

                            <div className="mdc-list">
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" >email</i>All Mail
                                </a>
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" >delete</i>Trash
                                </a>
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" >report</i>Spam
                                </a>
                            </div>
                    </nav>
                </nav>
            </aside>
        </div>
    }
}



