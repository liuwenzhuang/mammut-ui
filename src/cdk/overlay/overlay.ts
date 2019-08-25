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
        if (this.data.disabledScroll) {
            event.preventDefault();
        }

        this.$emit('scroll', event);
    }

    $getWrapElement(): HTMLDivElement {
        return this.$refs.wrap;
    }
}

export const OverlayCdkComponent = RegularT.extend(Overlay);
