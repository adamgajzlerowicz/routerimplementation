import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import {routerReducer, syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Link, Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Dropdown from './dropdown';
import About from './about';

const reducer = () => {
    return {};
};

const customHistory = createBrowserHistory();

const middleware = routerMiddleware(customHistory);

const store = createStore(
    combineReducers({
        ...reducer,
        routing: routerReducer
    }),
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(customHistory, store);

const Apps = () => {
        return (
            <Provider store={store}>
                <Router history={history}>
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
                </Router>
            </Provider>
        );
    }
;


export default Apps