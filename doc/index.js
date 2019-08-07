import Restate from 'regular-state';

import '../src';

import {App, Nav} from './app';
import {ExampleRoutes} from './examples/examples';


const routes = Object.assign({
    '/': {
        view: App
    },
    'nav': {
        view: Nav
    }
}, ExampleRoutes);


const manager = Restate();

manager
    .state(routes)
    .start({
        view: document.getElementById('app'),
        html5: true
    });
