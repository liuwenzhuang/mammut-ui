import { InputCdkProps, InputCdkState } from '../../cdk/input';
import { State, Props } from '../../component.interface';
import { InputAddonPlacement, InputSize } from './input.enums';

export interface InputProps extends InputCdkProps {
    size: InputSize;
    inline: boolean;
    prefix: string;
    suffix: string;
}

export interface InputState extends InputCdkState {
    prefixTemplate: string;
    suffixTemplate: string;
}

export interface InputAddonProps extends Props {
    placement: InputAddonPlacement;
}

export interface InputAddonState extends State {
}

export interface InputGroupProps extends Props {
    compact: boolean;
    size: InputSize;
}

export interface InputGroupState extends State {
}

export interface InputTextareaProps extends InputCdkProps {
    showCounter: boolean;
    max: number;
}

export interface InputTextareaState extends InputCdkState {
    counter: number;
}
