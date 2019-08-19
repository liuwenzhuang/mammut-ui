import { RegularT } from 'regularts';
import Regular from 'regularjs';
import template from './tooltip.html';
import styles from './tooltip.scss';
import { Component } from '../component.interface';

export type Placement = 'left' | 'right' | 'bottom' | 'top' | string;
export type Trigger = 'hover' | 'click' | string;

export interface TooltipProps {
    title: string;
    placement: Placement;
    visible: boolean;
    trigger: Trigger;
}

export interface TooltipStats extends Component {
    tooltipClassName: string;
}

const TooltipContext = Regular.extend({
    template: `<div ref="context" class="hook-tooltip-context {styles.tooltipContext} tooltip-{placement} {className}">{#include title}</div>`,
    data: {
        styles
    },
    init() {
        this.bindEvent();
        this.$hide();
    },
    destroy() {
        this.offEvent();
        this.supr();
    },
    bindEvent() {
        const contextRef: HTMLDivElement = this.$refs['context'];
        this.mouseenterHandle = () => {
            this.$emit('enter');
        };
        this.mouseoutHandle = ($event: MouseEvent) => {
            if (contextRef && contextRef.contains($event.relatedTarget as Node)) {
                return;
            }
            this.$emit('out');
        };

        contextRef.addEventListener('mouseenter', this.mouseenterHandle);
        contextRef.addEventListener('mouseout', this.mouseoutHandle);
    },
    offEvent() {
        const contextRef: HTMLDivElement = this.$refs['context'];

        contextRef.removeEventListener('mouseenter', this.mouseenterHandle);
        contextRef.removeEventListener('mouseout', this.mouseoutHandle);
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
        const left = position.left + -(contextRef.offsetWidth + 10);

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementRight(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top + (position.height - contextRef.offsetHeight) / 2;
        const left = position.left + position.width + 10;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementTop(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top - (contextRef.offsetHeight + 10);
        const left = position.left + (position.width - contextRef.offsetWidth) / 2;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    },
    computePlacementBottom(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs['context'];

        const top = position.top + position.height + 10;
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

    data: TooltipProps & TooltipStats = {
        tooltipClassName: '',
        title: '',
        placement: 'top',
        visible: false,
        styles: styles,
        trigger: 'hover',
        className: '',
        style: {}
    };

    config(data?: TooltipProps & TooltipStats) {
        this.tooltipContext = new TooltipContext({
            data: {
                ...data,
                className: data.tooltipClassName
            }
        });
        this.tooltipContext.$inject(document.body);

        this.tooltipContext.$on('enter', () => {
            this.clearTimer();
        });

        this.tooltipContext.$on('out', () => {
            this.hideTooltip();
        });
    }

    init(data?: TooltipProps & TooltipStats) {
        this.tooltipWrapRef = this.$refs['wrap'];
        this.initEvent();
    }

    destroy() {
        this.tooltipContext.destroy();
        this.offEvent();
        this.supr();
    }

    initEvent() {
        const {trigger} = this.data;
        this.showTooltipHandle = () => {
            this.showTooltip();
        };
        this.hideTooltipHandle = ($event: MouseEvent) => {
            if (this.tooltipWrapRef.contains($event.relatedTarget as Node)) {
                return;
            }

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

    offEvent() {
        const {trigger} = this.data;

        switch (trigger) {
            case 'click':
                break;
            case 'hover':
                this.tooltipWrapRef.removeEventListener('mouseenter', this.showTooltipHandle);
                this.tooltipWrapRef.removeEventListener('mouseout', this.hideTooltipHandle);
                break;
        }
    }

    clearTimer() {
        if (this.hideTooltipTimer) {
            clearTimeout(this.hideTooltipTimer);
            this.hideTooltipTimer = null;
        }

        if (this.showTooltipTimer) {
            clearTimeout(this.showTooltipTimer);
            this.showTooltipTimer = null;
        }
    }

    showTooltip() {
        this.clearTimer();

        this.showTooltipTimer = setTimeout(() => {
            const {visible} = this.data;

            if (visible) {
                return;
            }

            const wrapPosition = this.tooltipWrapRef.getBoundingClientRect();
            this.tooltipContext.$show(wrapPosition);
            this.data.visible = true;
        }, 100);
    }

    hideTooltip() {
        this.clearTimer();

        this.hideTooltipTimer = setTimeout(() => {
            this.tooltipContext.$hide();
            this.data.visible = false;
        }, 100);
    }
}

export const Tooltip = RegularT.extend(TooltipComponent);

