//@flow
import React from 'react';
import {Route} from 'react-router-dom';
import Space from './component';

const SpaceRoute = () => {
    return (
        <Route
            path={'/space'}
            key={'/space'}
            component={Space}
        />
    )
};

const routes = [SpaceRoute()];

export {
    routes as default
}