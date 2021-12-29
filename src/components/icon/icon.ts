import { RegularT } from 'regularts';
import template from './icon.html';
import { IconProps, IconSize, IconState } from './icon.interface';
import styles from './icon.scss';
import './fonts/iconfont.js';

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

IconComponent.directive('xlink:href', function(elem, value) {
    if (value.type === 'expression') {
        this.$watch(value, function(val) {
            elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', val);
        });
    } else {
        elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
    }
});
