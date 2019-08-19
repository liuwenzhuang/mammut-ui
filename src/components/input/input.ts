import { RegularT } from 'regularts';
import { InputSize } from './input.enums';
import template from './input.html';
import { InputProps, InputState } from './input.interface';
import styles from './input.scss';

export class Input extends RegularT<InputProps, InputState> {
    name = 'ui-input';
    template = template;
    data: InputProps & InputState = {
        addonAfter: '',
        addonBefore: '',
        className: '',
        defaultValue: '',
        disabled: false,
        inline: false,
        name: '',
        placeholder: '',
        prefix: '',
        prefixTemplate: '',
        readonly: false,
        size: InputSize.normal,
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
