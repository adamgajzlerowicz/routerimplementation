import React from 'react'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import {ConnectedRouter, routerReducer, syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Link, Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dropdown from './dropdown';
import About from './about';

const reducer = () => {
    return {};
};

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducer,
        router: routerReducer
    }),
    compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const Apps = () => {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <ul>
                            <li><Link to="/">/</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>

                        <hr/>

                        <Route
                            path="/"
                            component={Dropdown}
                        />
                        <Route
                            path="/about"
                            component={About}
                        />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
;


export default Apps