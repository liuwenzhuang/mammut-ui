import { State, Props } from '../../component.interface';

export interface InputCdkProps extends Props {
    defaultValue: string;
    disabled: boolean;
    readonly: boolean;
    name: string;
    id: string;
    type: string;
    placeholder: string;
    value: string;
}

export interface InputCdkState extends State {
}
