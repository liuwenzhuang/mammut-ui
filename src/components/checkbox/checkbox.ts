import { RegularT } from 'regularts';
import template from './checkbox.html';
import styles from './checkbox.scss';

export interface CheckboxProps {
    checked: boolean;
    disabled: boolean;
}

interface State {
    styles: any;
}

class CheckboxComponent extends RegularT<CheckboxProps & State> {
    template = template;
    name = 'ui-checkbox';

    data = {
        checked: false,
        disabled: false,
        inline: false,
        styles,
    };

    handleClick() {
        if (this.data.disabled) {
            return;
        }

        this.data.checked = !this.data.checked;
        this.$emit('change', this.data.checked);
    }
}

export const Checkbox = RegularT.extend(CheckboxComponent);
