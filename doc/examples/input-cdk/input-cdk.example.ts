import { RegularT } from 'regularts';
import template from './input-cdk.example.html';

export class InputCdkExample extends RegularT {
    template = template;

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

    handleInputEvent(type, {event, value}) {
        console.info(type, value, event);
    }
}

export const InputCdkExampleComponent = RegularT.extend(InputCdkExample);
