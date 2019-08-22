import Regular from 'regularjs';
import _ from 'lodash';

import template from './popupMenu.html';
import { transformStyles } from '../../utils';

const dom = Regular.dom;

export const PopupMenu = Regular.extend({
    template,
    name: 'ui-popup-menu',
    config(props) {
        this.data = Object.assign(
            {
                scrollHide: false,
            },
            props
        );
    },
    init(data) {
        const menuElement = dom.element(this.$refs.menu);
        menuElement.style.top = data.position.top;
        menuElement.style.left = data.position.left;
    },
    handleOverlayMousedown() {
        this.$emit('hide');
    },
    handleOverlayScroll(event) {
        // 菜单内的滚动不触发关闭操作
        const menuElement = dom.element(this.$refs.menu);
        if (menuElement.contains(event.target)) {
            return;
        }

        if (this.data.scrollHide) {
            this.$emit('hide');
        }
    },
    handleMenuClick($event) {
        // 存在子菜单的点击无效
        if ($event.children) {
            return;
        }

        this.$emit('click', $event);
    },
});

/**
 * 显示菜单
 * @param position
 * @param menu
 * @param [options]
 */
PopupMenu.show = (position, menu, options) => {
    if (!_.isObject(options)) {
        options = {};
    }

    position = transformStyles(position);

    return new Promise(resolve => {
        const instance = new PopupMenu({
            data: Object.assign(
                {
                    menu,
                    position,
                },
                options
            ),
        }).$inject(document.body);

        instance.$on('hide', () => {
            instance.destroy();

            resolve(null);
        });

        instance.$on('click', $event => {
            instance.destroy();

            resolve($event);
        });
    });
};
