// init RegularT
import Regular from 'regularjs';
import { RegularT } from 'regularts';
import './assets/scss/index.scss';

RegularT.setRegular(Regular);

// cdk component
export { Overlay, OverlayCdkComponent } from './cdk/overlay';
export { Menu } from './cdk/menu/menu';
export { List } from './cdk/list/list';
export {
    InputCdk,
    InputCdkComponent,
    InputCdkState,
    InputCdkProps,
} from './cdk/input';

// components
export { PopupMenu } from './components/popupMenu/popupMenu';
export { Cascader } from './components/cascader/cascader';
export { Checkbox, CheckboxComponent } from './components/checkbox';
export {
    Tooltip,
    TooltipComponent,
    TooltipBody,
    TooltipBodyComponent,
    destroyAll as destroyAllTooltip,
} from './components/tooltip';
export { Icon, IconSize, IconComponent } from './components/icon';
export {
    Input,
    InputComponent,
    InputAddon,
    InputAddonComponent,
    InputGroup,
    InputGroupComponent,
    Textarea,
    TextareaComponent,
} from './components/input';
export {
    TagComponent
} from './components/tag'
