import * as React from 'react';
import {Route,Switch} from 'react-router-dom';

import MainScene from './scenes/mainScene';
import NotFoundScene from './scenes/notFoundScene'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/"
                       component={MainScene}
                       exact
                />
                <Route path="*"
                       component={NotFoundScene}
                       exact
                />
            </Switch>
        </div>
    )
};

export default App;