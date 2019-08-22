import { Component } from '../component.interface';

export enum IconSize {
    large = 'large',
    normal = 'normal',
    small = 'small',
}

export interface IconProps {
    type: string;
    size: IconSize;
}

export interface IconState extends Component {
    className: string;
}
