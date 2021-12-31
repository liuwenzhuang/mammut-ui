import { RegularT } from 'regularts';
import './fonts/iconfont.css';
import template from './icon.html';
import { IconProps, IconSize, IconState } from './icon.interface';
import styles from './icon.scss';

export class Icon extends RegularT<IconProps, IconState> {
    name = 'ui-icon';
    template = template;
    data: IconProps & IconState = {
        className: '',
        size: IconSize.normal,
        style: {},
        styles,
        type: '',
    };

    handleClick($event) {
        this.$emit('click', $event);
    }
}

export const IconComponent = RegularT.extend(Icon);
