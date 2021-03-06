import Restate from 'regular-state';

import '../src';

import { App } from './app';
import { ExampleRoutes } from './examples/examples';

const routes = Object.assign(
    {
        '/': {
            view: App,
        },
    },
    ExampleRoutes
);

const manager = Restate();

manager.state(routes).start({
    html5: false,
    view: document.getElementById('app'),
});
