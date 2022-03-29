import _ from '../../../lodash';
import { RegularT } from 'regularts';
import {
    TooltipBody,
    TooltipBodyComponent,
} from '../tooltip-body/tooltip-body';
import { Placement, Trigger } from '../tooltip.enums';
import { TooltipProps, TooltipState } from '../tooltip.interface';
import template from './tooltip.html';
import styles from './tooltip.scss';

const tooltipFns = [];

export function destroyAll() {
    while (tooltipFns.length) {
        const tooltipIns = tooltipFns.pop();
        if (tooltipIns) {
            tooltipIns.destroy.call(tooltipIns);
        }
    }
}

export class Tooltip extends RegularT<TooltipProps, TooltipState> {
    template = template;
    name = 'ui-tooltip';
    tooltipWrapRef: Element = null;
    tooltipBodyRef: TooltipBody = null;
    showTooltipHandle = null;
    hideTooltipHandle = null;
    toggleTooltipHandle = null;
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
        this.injectTooltipBody();
    }

    init(data?: TooltipProps & TooltipState) {
        this.tooltipWrapRef = this.$refs.wrap;
        this.bindEvent();
        tooltipFns.push(this);
    }

    destroy() {
        this.tooltipBodyRef.destroy();
        this.offEvent();
        this.supr();
    }

    injectTooltipBody() {
        const { trigger } = this.data;
        const tooltipBodyProps = this.getTooltipBodyProps();

        this.tooltipBodyRef = new TooltipBodyComponent({
            data: tooltipBodyProps,
        });
        this.tooltipBodyRef.$inject(document.body);
        this.tooltipBodyRef.$hide();

        if (trigger === Trigger.hover) {
            this.tooltipBodyRef.$on('enter', () => {
                this.clearTimer();
            });

            this.tooltipBodyRef.$on('out', () => {
                this.hideTooltip();
            });
        }
    }

    bindEvent() {
        const { trigger } = this.data;

        switch (trigger) {
            case Trigger.click:
                this.toggleTooltipHandle = () => {
                    this.toggleTooltip();
                };

                this.tooltipWrapRef.addEventListener(
                    'click',
                    this.toggleTooltipHandle
                );

                break;
            case Trigger.hover:
                this.showTooltipHandle = () => {
                    this.showTooltip();
                };
                this.hideTooltipHandle = ($event: MouseEvent) => {
                    if (
                        this.tooltipWrapRef.contains(
                            $event.relatedTarget as Node
                        )
                    ) {
                        return;
                    }

                    this.hideTooltip();
                };

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

    toggleTooltip() {
        const { visible } = this.data;

        if (visible) {
            this.tooltipBodyRef.$hide();
        } else {
            const wrapPosition = this.tooltipWrapRef.getBoundingClientRect();
            this.tooltipBodyRef.$show(wrapPosition);
        }

        this.$update({
            visible: !visible,
        });
    }

    private getTooltipBodyProps() {
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

        return _.merge(
            {
                className: this.data.tooltipClassName,
                style: this.data.tooltipStyle,
            },
            _.pick(
                this.data,
                Object.keys(this.data).filter(
                    key => blackList.indexOf(key) === -1
                )
            )
        );
    }
}

export const TooltipComponent = RegularT.extend(Tooltip);
