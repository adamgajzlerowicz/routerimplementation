//@flow

import {routes as AboutRoutes} from './about';
import type {RouteType} from './types';

import {routes as SpaceRoutes} from './space';

const routes: [RouteType] = [...AboutRoutes, ...SpaceRoutes];

export default routes;