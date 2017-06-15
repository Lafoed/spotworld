import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import configureStore from './configureStore'

import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

const muiTheme = getMuiTheme({
    palette: {
        // textColor: cyan500,
    },
    appBar: {
        // height: 50,
    },
});

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App /></Provider>
    </MuiThemeProvider>,
    document.getElementById('react_root')
);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const HotApp = require('./components/app').default;

        render(
            <MuiThemeProvider>
                <Provider store={store}>
                    <HotApp />
                </Provider>
            </MuiThemeProvider>,
            document.getElementById('react_root')
        );
    });
}


