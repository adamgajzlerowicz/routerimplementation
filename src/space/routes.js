//@flow
import Space from './component';
import SingularSpaceComponent from './singleSpaceComponent';
import type {RouteType} from '../types';

const SpaceRoute: RouteType = {
    Component: Space,
    path: '/space',
    name: '/space',
    exact: true
};

const SingularSpaceRoute: RouteType = {
    Component: SingularSpaceComponent,
    path: '/space/:id',
    name: '/space/:id',
    exact: true,
    devProps: {
        id: 'blah'
    }
};


const routes = [SpaceRoute, SingularSpaceRoute];

export {
    routes as default
}