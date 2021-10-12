import Regular from 'regularjs';

import { CascaderExample } from './cascader/cascader.example';
import { CheckboxExample } from './checkbox/checkbox.example';
import './example-previvew/example-preview';

import template from './examples.html';
import styles from './examples.scss';
import { IconExampleComponent } from './icon/icon.example';
import { InputCdkExampleComponent } from './input-cdk/input-cdk.example';
import { InputExampleComponent } from './input/input.example';
import { MenuExample } from './menu/menu.example';
import { OverlayExampleComponent } from './overlay/overlay.example';
import { PopupMenuExample } from './popupMenu/popupMenu.example';
import { ToolTipExample } from './tooltip/tooltip.example';
import { TagExample } from './tag/tag.example';

const Nav = Regular.extend({
    template: '<MarkdownDoc url="/doc/examples/nav.md"></MarkdownDoc>',
});

export const ExampleMain = Regular.extend({
    data: {
        styles,
    },
    template,
});

export const ExampleRoutes = {
    examples: {
        view: ExampleMain,
    },
    'examples.cascader': {
        view: CascaderExample,
    },
    'examples.checkbox': {
        view: CheckboxExample,
    },
    'examples.icon': {
        view: IconExampleComponent,
    },
    'examples.input': {
        view: InputExampleComponent,
    },
    'examples.input-cdk': {
        view: InputCdkExampleComponent,
    },
    'examples.main-nav': {
        view: Nav,
    },
    'examples.menu': {
        view: MenuExample,
    },
    'examples.overlay': {
        view: OverlayExampleComponent,
    },
    'examples.popup-menu': {
        view: PopupMenuExample,
    },
    'examples.tooltip': {
        view: ToolTipExample,
    },
    'examples.tag': {
        view: TagExample,
    },
};
