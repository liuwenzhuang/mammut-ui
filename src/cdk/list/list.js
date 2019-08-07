import Regular from 'regularjs';
import template from './list.html';
import styles from './list.scss';

import _ from 'lodash';

export const List = Regular.extend({
    template,
    name: 'ui-cdk-list',
    config(props) {
        this.data = _.merge({
            styles,
            options: []
        }, props);
    },
    handleMousedown(event) {
        this.$emit('mousedown', event);
    },
    handleClick(...args) {
        this.$emit('click', args);
    }
});
