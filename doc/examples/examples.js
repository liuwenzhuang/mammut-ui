import Regular from 'regularjs';

import template from './examples.html';
import styles from './examples.scss';
import examplePreviewTemplate from './example-preview.html';

import {MenuExample} from './menu/menu.example';
import {OverlayExample} from './overlay/overlay.example';
import {PopupMenuExample} from './popupMenu/popupMenu.example';
import {CascaderExample} from './cascader/cascader.example';

const Nav = Regular.extend({
    template: '<MarkdownDoc url="/doc/examples/nav.md"></MarkdownDoc>'
});

Regular.extend({
    name: 'ExamplePreview',
    template: examplePreviewTemplate
});

export const ExampleMain = Regular.extend({
    template,
    data: {
        styles
    }
});

export const ExampleRoutes = {
    'examples': {
        view: ExampleMain
    },
    'examples.main-nav': {
        view: Nav
    },
    'examples.menu': {
        view: MenuExample
    },
    'examples.overlay': {
        view: OverlayExample
    },
    'examples.popup-menu': {
        view: PopupMenuExample
    },
    'examples.cascader': {
        view: CascaderExample
    }
};
