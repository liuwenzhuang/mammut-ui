import * as _ from 'lodash';
import { RegularT } from 'regularts';
import {
    TooltipBody,
    TooltipBodyComponent,
} from '../tooltip-body/tooltip-body';
import { Placement, Trigger } from '../tooltip.enums';
import { TooltipProps, TooltipState } from '../tooltip.interface';
import template from './tooltip.html';
import styles from './tooltip.scss';

export class Tooltip extends RegularT<TooltipProps, TooltipState> {
    template = template;
    name = 'ui-tooltip';
    tooltipWrapRef: Element = null;
    tooltipBodyRef: TooltipBody = null;
    showTooltipHandle = null;
    hideTooltipHandle = null;
    showTooltipTimer = null;
    hideTooltipTimer = null;

    data: TooltipProps & TooltipState = {
        className: '',
        placement: Placement.top,
        preventDefault: false,
        style: {},
        styles,
        title: '',
        tooltipClassName: '',
        tooltipStyle: {},
        trigger: Trigger.hover,
        visible: false,
    };

    config(data?: TooltipProps & TooltipState) {
        const blackList = [
            'className',
            'preventDefault',
            'style',
            'styles',
            'tooltipClassName',
            'tooltipStyle',
            'trigger',
            'visible',
        ];

        this.tooltipBodyRef = new TooltipBodyComponent({
            data: _.merge(
                {
                    className: this.data.tooltipClassName,
                    style: this.data.tooltipStyle
                },
                _.pick(
                    this.data,
                    Object.keys(this.data).filter(
                        key => blackList.indexOf(key) === -1
                    )
                )
            ),
        });
        this.tooltipBodyRef.$inject(document.body);

        this.tooltipBodyRef.$on('enter', () => {
            this.clearTimer();
        });

        this.tooltipBodyRef.$on('out', () => {
            this.hideTooltip();
        });
    }

    init(data?: TooltipProps & TooltipState) {
        this.tooltipWrapRef = this.$refs.wrap;
        this.initEvent();
    }

    destroy() {
        this.tooltipBodyRef.destroy();
        this.offEvent();
        this.supr();
    }

    initEvent() {
        const { trigger } = this.data;
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
            case Trigger.click:
                break;
            case Trigger.hover:
                this.tooltipWrapRef.addEventListener(
                    'mouseenter',
                    this.showTooltipHandle
                );
                this.tooltipWrapRef.addEventListener(
                    'mouseout',
                    this.hideTooltipHandle
                );
                break;
        }
    }

    offEvent() {
        const { trigger } = this.data;

        switch (trigger) {
            case Trigger.click:
                break;
            case Trigger.hover:
                this.tooltipWrapRef.removeEventListener(
                    'mouseenter',
                    this.showTooltipHandle
                );
                this.tooltipWrapRef.removeEventListener(
                    'mouseout',
                    this.hideTooltipHandle
                );
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
            const { visible } = this.data;

            if (visible) {
                return;
            }

            const wrapPosition = this.tooltipWrapRef.getBoundingClientRect();
            this.tooltipBodyRef.$show(wrapPosition);
            this.data.visible = true;
        }, 100);
    }

    hideTooltip() {
        this.clearTimer();

        this.hideTooltipTimer = setTimeout(() => {
            this.tooltipBodyRef.$hide();
            this.data.visible = false;
        }, 100);
    }
}

export const TooltipComponent = RegularT.extend(Tooltip);
