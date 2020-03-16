import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './Views/Dashboard.js';
import Home from './Views/Home.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
