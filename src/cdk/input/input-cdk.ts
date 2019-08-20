import { RegularT } from 'regularts';
import template from './input-cdk.html';

import { InputCdkProps, InputCdkState } from './input-cdk.interface';
import styles from './input-cdk.scss';

export class InputCdk extends RegularT<InputCdkProps, InputCdkState> {
    name = 'ui-cdk-input';
    template = template;
    data: InputCdkProps & InputCdkState = {
        defaultValue: '',
        disabled: false,
        name: '',
        placeholder: '',
        readonly: false,
        styles,
        type: 'text',
        value: '',
    };

    config(data?: InputCdkProps & InputCdkState): void {
        data.value = data.value || data.defaultValue || '';
    }

    handleFocus($event: MouseEvent) {
        const {value} = this.data;

        this.$emit('focus', {
            $event,
            value,
        });
    }

    handleBlur($event: MouseEvent) {
        const {value} = this.data;

        this.$emit('blur', {
            $event,
            value,
        });
    }

    handleKeydown($event) {
        const {event}: { event: KeyboardEvent } = $event;
        this.$emit('keydown', event);
    }

    handleKeyup($event) {
        const {event}: { event: KeyboardEvent } = $event;
        this.$emit('keyup', event);
    }

    handleChange($event: UIEvent) {
        const value = ($event.target as HTMLInputElement).value;

        this.$emit('change', {
            $event,
            value,
        });
    }
}

export const InputCdkComponent = RegularT.extend(InputCdk);
