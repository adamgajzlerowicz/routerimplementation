import {routes as AboutRoutes} from './about';
import {fromJS} from 'immutable';

const routes = fromJS([]).merge(
    AboutRoutes
);

export default routes;