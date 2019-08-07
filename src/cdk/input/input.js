import Regular from 'regularjs';
import _ from 'lodash';

import template from './input.html';
import styles from './input.scss';

export const Input = Regular.extend({
    template,
    name: 'ui-cdk-input',
    config(props) {
        this.data = _.merge({
            styles,
            // API
            disabled: false,
            active: false,
            type: 'text',
            name: '',
            id: '',
            value: '',
            showTriangle: false
        }, props);
    },
    handleClick(event) {
        this.$emit('click', event);
    },
    $getElement() {
        return this.$refs.input;
    }
});
