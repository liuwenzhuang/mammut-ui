import { RegularT } from 'regularts';
import { InputSize } from '../input.enums';
import { InputProps, InputState } from '../input.interface';
import template from './input.html';
import styles from './input.scss';

export class Input extends RegularT<InputProps, InputState> {
    name = 'ui-input';
    template = template;
    data: InputProps & InputState = {
        className: '',
        defaultValue: '',
        disabled: false,
        id: '',
        inline: false,
        name: '',
        placeholder: '',
        prefix: '',
        prefixTemplate: '',
        readonly: false,
        size: InputSize.normal,
        style: {},
        styles,
        suffix: '',
        suffixTemplate: '',
        type: 'text',
        value: '',
    };

    config(data?: InputProps & InputState) {
        data.prefixTemplate = this.generateIconTemplate(data.prefix);
        data.suffixTemplate = this.generateIconTemplate(data.suffix);
    }

    handleFocus($event) {
        this.$emit('focus', $event);
    }

    handleBlur($event) {
        this.$emit('blur', $event);
    }

    handleKeyup(event: KeyboardEvent, value: string) {
        if (event.key === 'Enter') {
            this.$emit('pressEnter', { event, value });
        }

        this.$emit('keyup', event, value);
    }

    handleKeydown($event) {
        this.$emit('keydown', $event);
    }

    handleInput($event) {
        this.$emit('input', $event);
    }

    handleClear() {
        this.$update({
            value: '',
        });
    }

    private generateIconTemplate(type: string) {
        type = type.trim();

        if (type) {
            if (type.trim().startsWith('<')) {
                return type;
            } else {
                return `<ui-icon type="${type}" />`;
            }
        } else {
            return '';
        }
    }
}

export const InputComponent = RegularT.extend(Input);
