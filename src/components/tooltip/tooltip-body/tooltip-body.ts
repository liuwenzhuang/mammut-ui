import { RegularT } from 'regularts';
import { Placement } from '../tooltip.enums';
import { TooltipBodyProps, TooltipBodyState } from '../tooltip.interface';
import template from './tooltip-body.html';
import styles from './tooltip-body.scss';

export class TooltipBody extends RegularT<TooltipBodyProps, TooltipBodyState> {
    name = 'ui-tooltip-body';
    template = template;
    data: TooltipBodyState & TooltipBodyProps = {
        className: '',
        placement: Placement.top,
        style: {},
        styles,
        title: '',
    };
    mouseenterHandle: () => void = null;
    mouseoutHandle: (event: MouseEvent) => void;

    init() {
        this.bindEvent();
    }

    desroy() {
        this.offEvent();
        this.supr();
    }

    bindEvent() {
        const bodyRef: HTMLDivElement = this.$refs.body;
        this.mouseenterHandle = () => {
            this.$emit('enter');
        };
        this.mouseoutHandle = ($event: MouseEvent) => {
            if (
                bodyRef &&
                bodyRef.contains($event.relatedTarget as Node)
            ) {
                return;
            }
            this.$emit('out');
        };

        bodyRef.addEventListener('mouseenter', this.mouseenterHandle);
        bodyRef.addEventListener('mouseout', this.mouseoutHandle);
    }

    offEvent() {
        const bodyRef: HTMLDivElement = this.$refs.body;

        bodyRef.removeEventListener('mouseenter', this.mouseenterHandle);
        bodyRef.removeEventListener('mouseout', this.mouseoutHandle);
    }

    $show(position: ClientRect) {
        const { placement } = this.data;
        const bodyRef: HTMLDivElement = this.$refs.body;

        bodyRef.style.position = 'fixed';

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
    }

    $hide() {
        const bodyRef: HTMLDivElement = this.$refs.body;

        bodyRef.style.left = '-9999px';
        bodyRef.style.top = '-9999px';
    }

    computePlacementLeft(position: ClientRect) {
        const bodyRef: HTMLDivElement = this.$refs.body;

        const top =
            position.top + (position.height - bodyRef.offsetHeight) / 2;
        const left = position.left + -(bodyRef.offsetWidth + 10);

        bodyRef.style.top = `${top}px`;
        bodyRef.style.left = `${left}px`;
    }

    computePlacementRight(position: ClientRect) {
        const bodyRef: HTMLDivElement = this.$refs.body;

        const top =
            position.top + (position.height - bodyRef.offsetHeight) / 2;
        const left = position.left + position.width + 10;

        bodyRef.style.top = `${top}px`;
        bodyRef.style.left = `${left}px`;
    }

    computePlacementTop(position: ClientRect) {
        const bodyRef: HTMLDivElement = this.$refs.body;

        const top = position.top - (bodyRef.offsetHeight + 10);
        const left =
            position.left + (position.width - bodyRef.offsetWidth) / 2;

        bodyRef.style.top = `${top}px`;
        bodyRef.style.left = `${left}px`;
    }

    computePlacementBottom(position: ClientRect) {
        const bodyRef: HTMLDivElement = this.$refs.body;

        const top = position.top + position.height + 10;
        const left =
            position.left + (position.width - bodyRef.offsetWidth) / 2;

        bodyRef.style.top = `${top}px`;
        bodyRef.style.left = `${left}px`;
    }
}

export const TooltipBodyComponent = RegularT.extend(TooltipBody);
