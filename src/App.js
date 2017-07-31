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

const Apps = ({...props}) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route
                        path="/"
                        component={Dropdown}
                    />
                    {Routes.map((item): RouteType => {
                        const {Component, exact, path, devProps} = item;
                        const componentProps = 'dev' ? devProps : props;
                        return (<Route
                            exact={exact}
                            path={path}
                            key={path}
                            render={({...routerProps})=>{
                                return <Component {...routerProps} {...componentProps}/>
                            }}
                        />)
                    })}
                    <hr/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default Apps