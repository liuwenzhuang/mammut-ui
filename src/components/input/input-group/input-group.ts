import { RegularT } from 'regularts';
import { InputSize } from '../input.enums';
import { InputGroupProps, InputGroupState } from '../input.interface';
import template from './input-group.html';
import styles from './input-group.scss';

export class InputGroup extends RegularT<InputGroupProps, InputGroupState> {
    data: InputGroupProps & InputGroupState = {
        className: '',
        compact: false,
        size: InputSize.normal,
        style: {},
        styles,
    };
    name = 'ui-input-group';
    template = template;
}

export const InputGroupComponent = RegularT.extend(InputGroup);
