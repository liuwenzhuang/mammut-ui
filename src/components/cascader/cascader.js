import Regular from 'regularjs';
import _ from 'lodash';

import template from './cascader.html';
import styles from './cascader.scss';
import itemTemplate from './listItem.html';

import {transformStyles} from '../../utils';

const MENU_MARGIN_TOP = 4;

export const Cascader = Regular.extend({
    template,
    name: 'ui-cascader',
    config(props) {
        this.data = Object.assign({
            // 内部属性
            styles,
            itemTemplate,
            menuVisible: false,
            showOptions: [],
            selected: [],
            position: {
                top: 0,
                left: 0
            },
            displayText: '',
            // 可配置属性
            disabled: false,
            displayRender(selected) {
                return selected.map(item => item.label).join(' / ');
            },
            options: [],
            size: 'normal'
        }, props);
    },
    init() {
        if (this.data.selected.length > 0) {
            const displayText = this.computeSelectedLabel(this.data.selected);
            this.$update({
                displayText
            });
        }
    },
    /**
     * 计算菜单需要显示的位置
     */
    computePosition() {
        const wrap = this.$refs.input.$getElement();
        const {x, y, height} = wrap.getBoundingClientRect();

        return transformStyles({
            left: x,
            top: y + height + MENU_MARGIN_TOP
        });
    },
    /**
     * 根据菜单选项和
     */
    computeShowMenu(selected) {
        const {options} = this.data;
        const showOptions = [];
        showOptions.push(options);

        for (let index = 0, len = selected.length; index < len; index++) {
            const selectedValue = selected[index];
            const selectOptions = _.find(showOptions[index], _option => _option.value === selectedValue);

            if (selectOptions && selectOptions.children) {
                showOptions.push(selectOptions.children);
            }
        }

        return showOptions;
    },
    computeSelectedLabel(selected) {
        const {options} = this.data;

        let selectedOptions = _.clone(options);
        const rawSelectedList = selected.map((value) => {
            const target = _.find(selectedOptions, option => option.value === value);
            selectedOptions = target.children;
            return target;
        });

        return this.data.displayRender(rawSelectedList);
    },
    handleShowMenu() {
        const {selected} = this.data;
        const position = this.computePosition();
        const showOptions = this.computeShowMenu(selected);

        this.$update({
            position,
            showOptions,
            menuVisible: true
        });
    },
    handleHideMenu() {
        this.data.menuVisible = false;
    },
    handleMousedown(event) {
        event.stopPropagation();
    },
    handleClickItem([, item, index]) {
        if (item.disabled) {
            return;
        }

        let {selected} = this.data;
        selected = [].concat(selected.slice(0, index), item.value);

        if (item.children) {
            const showOptions = this.computeShowMenu(selected);

            this.$update({
                showOptions,
                selected
            });
        } else {
            const displayText = this.computeSelectedLabel(selected);
            this.$update({
                displayText,
                selected
            });
            this.$emit('change', selected);

            this.handleHideMenu();
        }
    }
});


