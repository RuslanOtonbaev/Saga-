import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

const ProviderTemplate = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
};

render(<ProviderTemplate />, document.getElementById('root'));
