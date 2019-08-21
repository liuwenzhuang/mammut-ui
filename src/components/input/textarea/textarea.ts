import { RegularT } from 'regularts';
import { InputTextareaProps, InputTextareaState } from '../input.interface';
import template from './textarea.html';
import styles from './textarea.scss';

export class Textarea extends RegularT<InputTextareaProps, InputTextareaState> {
    template = template;
    data: InputTextareaState & InputTextareaProps = {
        className: '',
        counter: 0,
        defaultValue: '',
        disabled: false,
        id: '',
        max: Infinity,
        name: '',
        placeholder: '',
        readonly: false,
        showCounter: false,
        style: {},
        styles,
        type: '',
        value: '',
    };
    name = 'ui-input-textarea';

    config(data?: InputTextareaProps & InputTextareaState): void {
        data.value = data.value || data.defaultValue;
        data.counter = data.value.length;
    }
}

export const TextareaComponent = RegularT.extend(Textarea);
