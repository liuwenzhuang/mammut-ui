import { RegularEvent, RegularT } from 'regularts';
import template from './input-cdk.html';

import { InputCdkProps, InputCdkState } from './input-cdk.interface';
import styles from './input-cdk.scss';

export class InputCdk extends RegularT<InputCdkProps, InputCdkState> {
    name = 'ui-cdk-input';
    template = template;
    data: InputCdkProps & InputCdkState = {
        className: '',
        defaultValue: '',
        disabled: false,
        id: '',
        name: '',
        placeholder: '',
        readonly: false,
        style: {},
        styles,
        type: 'text',
        value: '',
    };

    config(data?: InputCdkProps & InputCdkState): void {
        data.value = data.value || data.defaultValue || '';
    }

    handleFocus({ event }: RegularEvent<FocusEvent>) {
        const { value } = this.data;

        this.$emit('focus', { value, event });
    }

    handleBlur({ event }: RegularEvent<FocusEvent>) {
        const { value } = this.data;

        this.$emit('blur', { value, event });
    }

    handleKeydown({ event }: RegularEvent<KeyboardEvent>) {
        this.$emit('keydown', {
            event,
            value: (event.target as HTMLInputElement).value,
        });
    }

    handleKeyup({ event }: RegularEvent<KeyboardEvent>) {
        this.$emit('keyup', {
            event,
            value: (event.target as HTMLInputElement).value,
        });
    }

    handleInput({ event }: RegularEvent<InputEvent>) {
        this.$emit('input', {
            event,
            value: (event.target as HTMLInputElement).value,
        });
    }
}

export const InputCdkComponent = RegularT.extend(InputCdk);
