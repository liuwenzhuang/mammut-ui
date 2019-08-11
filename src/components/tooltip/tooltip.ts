import { RegularT } from 'regularts';
import RegularJs from 'regularjs';
import template from './tooltip.html';
import styles from './tooltip.scss';

export type Placement = 'left' | 'right' | 'bottom' | 'top' | string;
export type Trigger = 'hover' | 'click' | string;

export interface TooltipProps {
    title: string;
    placement: Placement;
    visible: boolean;
    trigger: Trigger;
}

export interface TooltipStats {
}

const TooltipContext = RegularJs.extend({
    template: `<div ref="context" class="{styles.tooltipContext} tooltip-{placement}">{#include title}</div>`,
    data: {
        styles
    },
    $show(position: ClientRect) {
        const {placement} = this.data;

        switch (placement) {
            case 'top':
                this.computePlacementTop(position);
                break;
            case 'bottom':
                this.computePlacementBottom(position);
                break;
            case 'left':
                this.computePlacementLeft(position);
                break;
            case 'right':
                this.computePlacementRight(position);
                break;
        }
    },
    $hide() {
        const contextRef: HTMLDivElement = this.$refs['context'];

        contextRef.style.left = '-9999px';
        contextRef.style.top = '-9999px';
    },
    computePlacementLeft(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top + (position.height - contextRef.offsetHeight) / 2;
        const left = position.left + - (contextRef.offsetWidth + 8);

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementRight(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top + (position.height - contextRef.offsetHeight) / 2;
        const left = position.left + position.width + 8;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementTop(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top - (contextRef.offsetHeight + 8);
        const left = position.left + (position.width - contextRef.offsetWidth) / 2;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementBottom(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top + position.height + 8;
        const left = position.left + (position.width - contextRef.offsetWidth) / 2;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    }
});


export class TooltipComponent extends RegularT<TooltipProps, TooltipStats> {
    template = template;
    name = 'ui-tooltip';
    tooltipWrapRef: Element = null;
    tooltipContext = null;
    showTooltipHandle = null;
    hideTooltipHandle = null;
    showTooltipTimer = null;
    hideTooltipTimer = null;

    data = {
        title: '',
        placement: 'top',
        visible: false,
        styles: styles,
        trigger: 'hover'
    };

    config(data?: TooltipProps & TooltipStats) {
        this.tooltipContext = new TooltipContext({
            data
        });
        this.tooltipContext.$inject(document.body);
    }

    public init(data?: TooltipProps & TooltipStats): void {
        this.tooltipWrapRef = this.$refs['wrap'];
        this.initEvent();
    }

    initEvent() {
        const {trigger} = this.data;
        this.showTooltipHandle = ($event) => {
            this.showTooltip($event);
        };
        this.hideTooltipHandle = () => {
            this.hideTooltip();
        };

        switch (trigger) {
            case 'click':
                break;
            case 'hover':
                this.tooltipWrapRef.addEventListener('mouseenter', this.showTooltipHandle);
                this.tooltipWrapRef.addEventListener('mouseout', this.hideTooltipHandle);
                break;
        }
    }

    showTooltip($event) {
        const wrapPosition = this.tooltipWrapRef.getBoundingClientRect();

        if (this.hideTooltipTimer) {
            clearTimeout(this.hideTooltipTimer);
            this.hideTooltipTimer = null;
        }

        this.showTooltipTimer = setTimeout(() => {
            this.tooltipContext.$show(wrapPosition);
        }, 100);
    }

    hideTooltip() {
        const wrapPosition = this.tooltipWrapRef.getBoundingClientRect();

        if (this.showTooltipTimer) {
            clearTimeout(this.showTooltipTimer);
            this.showTooltipTimer = null;
        }

        this.hideTooltipTimer = setTimeout(() => {
            this.tooltipContext.$hide();
        }, 100);
    }
}

export const Tooltip = RegularT.extend(TooltipComponent);

