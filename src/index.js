import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';

import App from './app';

const root = document.getElementById("root");

const RoutingMainComponentWrapper = () => {
    return (
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    )
};

render(<RoutingMainComponentWrapper/>, root);