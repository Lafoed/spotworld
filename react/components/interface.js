import {render} from 'react-dom';

export default class Interface extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
        document.addEventListener('mousemove', evt =>{
            drawer.open = evt.clientX < 100;
        });
    }

    render(){
        console.log('render Interface!!!');

        return <div>

            <aside className="mdc-temporary-drawer">
                <nav className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">

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
                <main className="demo-main mdc-toolbar-fixed-adjust">
                    <h1 className="mdc-typography--display1">Temporary Drawer</h1>
                    <p className="mdc-typography--body1">Click the menu icon above to open.</p>
                </main>

            <div className="mdc-card" id="popup" style={{
                background:"white",
                width:"40em"
            }}>
                <section className="mdc-card__primary">
                    <h1 className="mdc-card__title mdc-card__title--large">Marker</h1>
                    <h2 className="mdc-card__subtitle">Subtitle here</h2>
                </section>
                <section className="mdc-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </section>
                <section className="mdc-card__actions">
                    <button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
                    <button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
                </section>
            </div>

        </div>
    }
}


function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}
// export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Map)



