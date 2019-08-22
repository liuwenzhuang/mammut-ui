import { Component } from '../../components/component.interface';

export interface InputCdkProps {
    defaultValue: string;
    disabled: boolean;
    readonly: boolean;
    name: string;
    id: string;
    type: string;
    placeholder: string;
    value: string;
}

export interface InputCdkState extends Component {}

interface InputCdkEvent<T> {
    value: string;
    event: T;
}

export type InputFocusEvent = InputCdkEvent<FocusEvent>;
export type InputBlurEvent = InputCdkEvent<FocusEvent>;
export type InputInputEvent = InputCdkEvent<InputEvent>;
export type InputKeydownEvent = InputCdkEvent<KeyboardEvent>;
export type InputKeyupEvent = InputCdkEvent<KeyboardEvent>;
