import { RegularT } from 'regularts';
import { InputAddonPlacement } from '../input.enums';
import { InputAddonProps, InputAddonState } from '../input.interface';
import template from './input-addon.html';
import styles from './input-addon.scss';

export class InputAddon extends RegularT<InputAddonProps, InputAddonState> {
    data: InputAddonState & InputAddonProps = {
        className: '',
        placement: InputAddonPlacement.before,
        style: {},
        styles,
    };
    name = 'ui-input-addon';
    template = template;
}

export const InputAddonComponent = RegularT.extend(InputAddon);
