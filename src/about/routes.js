import React from 'react'
import {Route} from 'react-router-dom';
import About from '.';
import {fromJS} from 'immutable';

const AboutRoute = ()=>{
    return (
        <Route
            path="/about"
            key="/about"
            component={About}
        />
    )
};

const routes = fromJS([AboutRoute]);

export {
    routes as default
}