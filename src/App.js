import React from 'react'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import {Route} from 'react-router-dom';
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
                        <Route
                            path="/"
                            component={Dropdown}
                        />
                        <hr/>

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