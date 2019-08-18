import { InputCdkProps, InputCdkState } from '../../cdk/input';
import { InputSize } from './input.enums';

export interface InputProps extends Partial<InputCdkProps> {
    size: InputSize;
    inline: boolean;
}

export interface InputState extends Partial<InputCdkState> {
    className: string;
}
