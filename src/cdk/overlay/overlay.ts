import { RegularT } from 'regularts';

import template from './overlay.html';
import { OverlayProps, OverlayState } from './overlay.interface';
import styles from './overlay.scss';

export class Overlay extends RegularT<OverlayProps, OverlayState> {
    template = template;
    name = 'ui-cdk-overlay';
    data: OverlayProps & OverlayState = {
        className: '',
        disabledScroll: true,
        style: {},
        styles,
    };

    handleMousedown(event) {
        this.$emit('mousedown', event);
    }

    handleScroll(event) {
        console.log(event);
        if (this.data.disabledScroll) {
            event.preventDefault();
        }

        this.$emit('scroll', event);
    }
}

export const OverlayCdkComponent = RegularT.extend(Overlay);
