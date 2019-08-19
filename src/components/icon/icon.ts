import './fonts/iconfont.css';
import { RegularT } from 'regularts';
import template from './icon.html';
import styles from './icon.scss';
import { IconProps, IconSize, IconState } from './icon.interface';

export class Icon extends RegularT<IconProps, IconState> {
    name = 'ui-icon';
    template = template;
    data: IconProps & IconState = {
        className: '',
        size: IconSize.normal,
        type: '',
        styles,
        style: {}
    };
}

export const IconComponent = RegularT.extend(Icon);
