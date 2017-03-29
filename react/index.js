import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = configureStore();

render(
    <MuiThemeProvider>
    <Provider store={store}>
            <App />
    </Provider>
</MuiThemeProvider>,
    document.getElementById('react_root')
);

