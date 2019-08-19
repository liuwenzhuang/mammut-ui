import { RegularT } from 'regularts';
import template from './input.example.html';
import styles from './input.example.scss';

export class InputExample extends RegularT {
    template = template;
    data = {
        prefixTemplate: `<ui-icon type="search" style={{color: "#999"}} />`,
        styles,
    };

    handleFocus({$event, value}) {
        console.info('focus 事件', value, $event);
    }

    handleBlur({$event, value}) {
        console.info('blur 事件', value, $event);
    }

    handleInput({$event, value}) {
        console.info('input 事件', value, $event);
    }

    handleChange({$event, value}) {
        console.info('change 事件', value, $event);
    }
}

export const InputExampleComponent = RegularT.extend(InputExample);
