import Regular from 'regularjs';

import template from './menu.html';
import styles from './menu.scss';
import _ from '../../lodash';

const dom = Regular.dom;

export const Menu = Regular.extend({
    template,
    name: 'ui-cdk-menu',
    config(props) {
        this.data = Object.assign(
            {
                styles,
            },
            props
        );
    },
    init() {
        this.$watch('selected', function(selected) {
            if (!selected) return;

            const menu = this.data.menu.map(function(menuItem) {
                const tmp = {
                    selected: selected.indexOf(menuItem.key) !== -1,
                    children: [],
                };

                if (menuItem.children) {
                    tmp.children = menuItem.children.map(function(
                        childMenuItem
                    ) {
                        const _selected =
                            selected.indexOf(childMenuItem.key) !== -1;
                        tmp.selected = tmp.selected || _selected;

                        return _.merge(childMenuItem, {
                            selected: _selected,
                        });
                    });
                }

                return _.merge(menuItem, tmp);
            });

            this.$update({
                menu: menu,
            });
        });
    },
    computed: {
        hasDesc: function(data) {
            return (
                data.menu.filter(function(item) {
                    return item.desc;
                }).length !== 0
            );
        },
    },
    /**
     * 验证边界, 用于子菜单弹出位置确定
     */
    checkBoundary(index) {
        const children = dom.element(this.$refs['children' + index]);
        children.classList.remove('pull-left', 'pull-up');

        const position = children.getBoundingClientRect();

        if (position.right > window.innerWidth) {
            children.classList.add('pull-left');
        }

        if (position.bottom > window.innerHeight) {
            children.classList.add('pull-up');
        }
    },
    click(event, menuItem) {
        event.stopPropagation();

        if (!menuItem.disabled) {
            this.$emit('click', menuItem);
        }
    },
});
