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
            drawer.open = evt.clientX < 200;
        });
    }

    render(){
        console.log('render Interface!!!');
        var style={height:screen.availHeight};
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
            <div id="popup" style={{position:"absolute"}}>hello pop up</div>

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



