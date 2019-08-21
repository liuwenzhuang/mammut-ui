import { RegularT } from 'regularts';
import { CheckboxProps, CheckboxState } from '../checkbox.interface';
import template from './checkbox.html';
import styles from './checkbox.scss';

export class Checkbox extends RegularT<CheckboxProps, CheckboxState> {
    template = template;
    name = 'ui-checkbox';

    data: CheckboxProps & CheckboxState = {
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

export const CheckboxComponent = RegularT.extend(Checkbox);
