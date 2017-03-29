import UserCard from './UserCard'

export default class Header extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return <div className="mdc-toolbar mdc-toolbar--fixed">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <button className="demo-menu material-icons">menu</button>
                </section>
                {/*search field*/}
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <i className="material-icons" >search</i>
                    <div className="mdc-textfield mdc-textfield--fullwidth">
                        <input className="mdc-textfield__input "
                               type="text"
                               placeholder="Поиск адреса"
                        />
                    </div>
                </section>
                <UserCard></UserCard>
            </div>
    }
}



