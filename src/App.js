//@flow
import React from 'react'
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dropdown from './dropdown';
import Routes from './routes';
import store from './store';
import type {RouteType} from './types';

const history = createHistory();

const Apps = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route
                        path="/"
                        component={Dropdown}
                    />
                    {Routes.map((item): RouteType => {
                        return (<Route
                            path={item.get('path')}
                            key={item.get('path')}
                            component={item.get('Component')}
                        />);
                    })}
                    <hr/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default Apps