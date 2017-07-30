//@flow
import About from './component';
import type {RouteType} from '../types';

const AboutRoute: RouteType = {
    Component: About,
    path: '/about',
    name: '/about'
};

const routes = [AboutRoute];

export {
    routes as default
}