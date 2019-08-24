import { Component, Props } from '../component.interface';
import { Placement, Trigger } from './tooltip.enums';

export interface TooltipProps extends TooltipBodyProps {
    trigger: Trigger;
    tooltipClassName: string;
}

export interface TooltipState extends Component {
    visible: boolean;
}

export interface TooltipBodyProps extends Props {
    title: string;
    placement: Placement;
}

export interface TooltipBodyState extends Component {}
