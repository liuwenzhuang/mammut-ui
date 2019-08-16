import Regular from 'regularjs';

import template from './examples.html';
import styles from './examples.scss';
import './example-previvew/example-preview';

import { CascaderExample } from './cascader/cascader.example';
import { CheckboxExample } from './checkbox/checkbox.example';
import { MenuExample } from './menu/menu.example';
import { OverlayExample } from './overlay/overlay.example';
import { PopupMenuExample } from './popupMenu/popupMenu.example';
import { ToolTipExample } from './tooltip/tooltip.example';
import { IconExampleComponent } from './icon/icon.example';

const Nav = Regular.extend({
    template: '<MarkdownDoc url="/doc/examples/nav.md"></MarkdownDoc>'
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
    },
    'examples.checkbox': {
        view: CheckboxExample
    },
    'examples.tooltip': {
        view: ToolTipExample
    },
    'examples.icon': {
        view: IconExampleComponent
    }
};
