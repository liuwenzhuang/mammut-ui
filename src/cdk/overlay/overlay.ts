import Regular from 'regularjs';

import tpl from './overlay.html';
import styles from './overlay.scss';

export const Overlay = Regular.extend({
    template: tpl,
    name: 'ui-cdk-overlay',
    config(props) {
        this.data = Object.assign(
            {
                disabledScroll: true,
                styles: styles,
            },
            props
        );
    },
    handleMousedown(event) {
        this.$emit('mousedown', event);
    },
    handleScroll(event) {
        if (this.data.disabledScroll) {
            event.preventDefault();
        }

        this.$emit('scroll', event);
    },
});
