import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Summary from './pages/Summary';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route exact path="/summary">
                    <Summary />
                </Route>
                </Switch>
            </div>
    );
}

export default App
