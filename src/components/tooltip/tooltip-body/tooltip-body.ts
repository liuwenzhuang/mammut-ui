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
        this.$hide();
    }

    desroy() {
        this.offEvent();
        this.supr();
    }

    bindEvent() {
        const contextRef: HTMLDivElement = this.$refs.context;
        this.mouseenterHandle = () => {
            this.$emit('enter');
        };
        this.mouseoutHandle = ($event: MouseEvent) => {
            if (
                contextRef &&
                contextRef.contains($event.relatedTarget as Node)
            ) {
                return;
            }
            this.$emit('out');
        };

        contextRef.addEventListener('mouseenter', this.mouseenterHandle);
        contextRef.addEventListener('mouseout', this.mouseoutHandle);
    }

    offEvent() {
        const contextRef: HTMLDivElement = this.$refs.context;

        contextRef.removeEventListener('mouseenter', this.mouseenterHandle);
        contextRef.removeEventListener('mouseout', this.mouseoutHandle);
    }

    $show(position: ClientRect) {
        const { placement } = this.data;

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
        const contextRef: HTMLDivElement = this.$refs.context;

        contextRef.style.left = '-9999px';
        contextRef.style.top = '-9999px';
    }

    computePlacementLeft(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs.context;

        const top =
            position.top + (position.height - contextRef.offsetHeight) / 2;
        const left = position.left + -(contextRef.offsetWidth + 10);

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    }

    computePlacementRight(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs.context;

        const top =
            position.top + (position.height - contextRef.offsetHeight) / 2;
        const left = position.left + position.width + 10;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    }

    computePlacementTop(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs.context;

        const top = position.top - (contextRef.offsetHeight + 10);
        const left =
            position.left + (position.width - contextRef.offsetWidth) / 2;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    }

    computePlacementBottom(position: ClientRect) {
        const contextRef: HTMLDivElement = this.$refs.context;

        const top = position.top + position.height + 10;
        const left =
            position.left + (position.width - contextRef.offsetWidth) / 2;

        contextRef.style.top = `${top}px`;
        contextRef.style.left = `${left}px`;
    }
}

export const TooltipBodyComponent = RegularT.extend(TooltipBody);
