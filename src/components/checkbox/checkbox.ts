import Regular from 'regularjs';
import template from './checkbox.html';
import styles from './checkbox.scss';

interface Props {

}

interface State {
    checked: boolean;
    disabled: boolean;
    inline: boolean;
}

class Checkbox1 {
    template = template;
    name = 'ui-checkbox';

    data = {
        inline: false,
        disabled: false,
        checked: false,
        styles: styles
    };

    config(data) {
        this.data.styles = styles;
    }
}

const toRegular = function toRegular(component: any) {
    const componentInstance = new component();

    return Object.assign({}, componentInstance, componentInstance.__proto__);
};

export const Checkbox = Regular.extend(toRegular(Checkbox1));
