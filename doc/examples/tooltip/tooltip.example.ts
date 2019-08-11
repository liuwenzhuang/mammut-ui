import template from './tooltip.example.html';
import styles from './tooltip.example.scss';
import { RegularT } from 'regularts';


class TooltipExampleComponent extends RegularT {
    template = template;
    data = {
        styles
    };
}

export const ToolTipExample = RegularT.extend(TooltipExampleComponent);
