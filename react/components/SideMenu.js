
export default class SideMenu extends React.Component {
    constructor(props){
        super();
    }
    componentDidMount(){
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
        document.querySelector('.demo-menu').addEventListener('click', evt =>{
            drawer.open = true;
        });
    }

    render() {
        return <aside className="mdc-temporary-drawer">
                <nav className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                            Header here
                        </div>
                    </header>
                    <nav className="mdc-temporary-drawer__content mdc-list-group">
                        <div id="icon-with-text-demo" className="mdc-list">
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">add_location</i>Добавить событие
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">my_location</i>Мои события
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">info</i>О проекте
                            </a>
                        </div>
                    </nav>
                </nav>
            </aside>
    }
}



