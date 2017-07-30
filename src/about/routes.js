//@flow
import About from './component';
import {fromJS} from 'immutable';
import type {RouteType} from '../types';

const AppRoute: RouteType = {
    Component: About,
    path: '/about',
    name: 'about'
};
const routes = fromJS([AppRoute]);

export {
    routes as default
}