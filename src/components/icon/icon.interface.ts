import { State, Props } from '../../component.interface';

export enum IconSize {
    large = 'large',
    normal = 'normal',
    small = 'small',
}

export interface IconProps extends Props {
    type: string;
    size: IconSize;
}

export interface IconState extends State {
    className: string;
}
