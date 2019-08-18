import { Component } from '../../components/component.interface';

export interface InputCdkProps {
    defaultValue: string;
    disabled: boolean;
    readonly: boolean;
    name: string;
    type: string;
    placeholder: string;
}

export interface InputCdkState extends Pick<Component, 'styles'> {
    value: string;
}
