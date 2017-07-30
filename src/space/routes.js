//@flow
import React from 'react';
import {Route} from 'react-router-dom';
import Space from './component';
import SingularSpaceComponent from './singleSpaceComponent';

const SpaceRoute = () => {
    return (
        <Route
            exact
            path={'/space'}
            key={'/space'}
            component={Space}
        />
    )
};

const SingularSpaceRoute = () => {
    return (
        <Route
            path={'/space/:id'}
            key={'/space/:id'}
            component={SingularSpaceComponent}
        />
    )
};

const routes = [SpaceRoute(), SingularSpaceRoute()];

export {
    routes as default
}