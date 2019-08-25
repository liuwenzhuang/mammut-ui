import { State, Props } from '../../component.interface';
import { Placement, Trigger } from './tooltip.enums';

export interface TooltipProps extends Props {
    placement: Placement;
    preventDefault: boolean;
    title: string;
    tooltipClassName: string;
    tooltipStyle: { [key: string]: string };
    trigger: Trigger;
    visible: boolean;
}

export interface TooltipState extends State {
    visible: boolean;
}

export interface TooltipBodyProps extends Props {
    title: string;
    placement: Placement;
}

export interface TooltipBodyState extends State {
}
