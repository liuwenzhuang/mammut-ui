import Regular from 'regularjs';

import {PopupMenu} from '../../../src';

const menu = [
    {
        title: '超级长的菜单名称'
    }, {
        title: '普通菜单'
    }, {
        title: '一级菜单', children: [
            {
                title: '二级菜单1'
            },
            {
                title: '二级菜单2',
                disabled: true
            },
            {
                title: '二级菜单3'
            },
            {
                title: '二级菜单4'
            }
        ]
    }, {
        title: '禁用菜单', disabled: true
    }
];


export const PopupMenuExample = Regular.extend({
    template: `
<div class="doc-wrap">
    <div class="doc-sidebar"><MarkdownDoc url="/src/components/popupMenu/popupMenu.md"></MarkdownDoc></div>     
    <div class="doc-main">
        <button on-click="{this.handleClick()}">显示菜单</button>
        <ui-cdk-menu menu="{menu}"></ui-cdk-menu>
    </div>   
</div>
    `,
    config() {
        this.data.menu = menu;
    },
    handleClick() {
        PopupMenu.show({
            top: 100,
            left: 1736
        }, menu, {scrollHide: true}).then(clickMenu => {
            console.log(clickMenu);
        });
    }
});

