import template from './checkbox.html';
import styles from './checkbox.scss';
import { RegularX } from 'RegularX';

export interface CheckboxProps {
    checked: boolean;
    disabled: boolean;
}

interface State {
    styles: any
}

class CheckboxComponent extends RegularX<CheckboxProps & State> {
    template = template;
    name = 'ui-checkbox';

    data = {
        inline: false,
        disabled: false,
        checked: false,
        styles: styles
    };

    handleClick() {
        if (this.data.disabled) return;

        this.data.checked = !this.data.checked;
        this.$emit('change', this.data.checked);
    }
}

export const Checkbox = RegularX.extend(CheckboxComponent);
