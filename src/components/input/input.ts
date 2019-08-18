import { RegularT } from 'regularts';
import { InputSize } from './input.enums';
import template from './input.html';
import { InputProps, InputState } from './input.interface';
import styles from './input.scss';

export class Input extends RegularT<InputProps, InputState> {
    name = 'ui-input';
    template = template;
    data: InputProps & InputState = {
        className: '',
        defaultValue: '',
        disabled: false,
        inline: false,
        name: '',
        placeholder: '',
        readonly: false,
        size: InputSize.normal,
        styles,
        type: 'text',
        value: '',
    };

    handleFocus({$event, value}) {
        this.$emit('focus', {
            $event,
            value,
        });
    }

    handleBlur({$event, value}) {
        this.$emit('blur', {
            $event,
            value,
        });
    }

    handleInput({$event, value}) {
        this.$emit('input', {
            $event,
            value,
        });
    }

    handleChange({$event, value}) {
        this.$emit('change', {
            $event,
            value,
        });
    }
}

export const InputComponent = RegularT.extend(Input);
