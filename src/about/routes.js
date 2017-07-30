//@flow
import React from 'react';
import {Route} from 'react-router-dom';
import About from './component';

const AboutRoute = () => {
    return (
        <Route
            path={'/about'}
            key={'/about'}
            component={About}
        />
    )
};

const routes = [AboutRoute()];

export {
    routes as default
}