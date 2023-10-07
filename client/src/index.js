import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import reducers from "./reducers";
import history from "./history";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/feature";
import Signout from "./components/auth/Signout"
import Signin from "./components/auth/Signin";

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
            </App>
        </Router>
    </Provider>,
    document.querySelector('#root')
);