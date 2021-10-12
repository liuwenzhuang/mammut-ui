import { Props, State } from '../../component.interface';

export interface TagProps extends Props {
    /**
     * 标签色
     */
    color?: string;
    /**
     * 背景色
     */
    bgColor?: string;
    /**
     * 边框色
     */
    borderColor?: string;
}

export interface TagState extends State {
    onlyBgColor: boolean;
}
