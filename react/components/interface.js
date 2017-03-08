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
            drawer.open = true || evt.clientX < 200;
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
                            <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
                            </a>
                        </div>

                            <div className="mdc-list">
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
                                </a>
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
                                </a>
                                <a className="mdc-list-item" href="#">
                                    <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
                                </a>
                            </div>
                        </nav>
                    </nav>
                </aside>
                <main className="demo-main mdc-toolbar-fixed-adjust">
                    <h1 className="mdc-typography--display1">Temporary Drawer</h1>
                    <p className="mdc-typography--body1">Click the menu icon above to open.</p>
                </main>

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



