import { RegularT } from 'regularts';
import template from './input.example.html';
import styles from './input.example.scss';

export class InputExample extends RegularT {
    template = template;
    data = {
        prefixTemplate: `<ui-icon type="search" style={{color: "#999"}} />`,
        styles,
    };

    handleFocus($event) {
        this.handleInputEvent('focus 事件', $event);
    }

    handleBlur($event) {
        this.handleInputEvent('blur 事件', $event);
    }

    handleInput($event) {
        this.handleInputEvent('input 事件', $event);
    }

    handleKeydown($event) {
        this.handleInputEvent('keydown 事件', $event);
    }

    handleKeyup($event) {
        this.handleInputEvent('keyup 事件', $event);
    }

    handlePressEnter($event) {
        this.handleInputEvent('pressEnter 事件', $event);
    }

    handleInputEvent(type, {event, value}) {
        console.info(type, value, event);
    }
}

export const InputExampleComponent = RegularT.extend(InputExample);
