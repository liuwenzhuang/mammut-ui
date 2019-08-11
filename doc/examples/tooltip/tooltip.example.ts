import template from './tooltip.example.html';
import { RegularT } from 'regularts';


class TooltipExampleComponent extends RegularT {
    template = template;
}

export const ToolTipExample = RegularT.extend(TooltipExampleComponent);
