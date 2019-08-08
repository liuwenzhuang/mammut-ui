import Regular from 'regularjs';
import template from './checkbox.example.html';

export const CheckboxExample = Regular.extend({
    template,
    date: {
        checked: false
    },
    onChange($event) {
        console.log(`当前选中状态: ${$event}`);
    }
});
