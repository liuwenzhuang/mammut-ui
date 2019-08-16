import './assets/scss/index.scss';
// init RegularT
import Regular from 'regularjs';
import { RegularT } from 'regularts';

RegularT.setRegular(Regular);

// cdk component
export { Overlay } from './cdk/overlay/overlay';
export { Menu } from './cdk/menu/menu';
export { List } from './cdk/list/list';
export { Input } from './cdk/input/input';

// components
export { PopupMenu } from './components/popupMenu/popupMenu';
export { Cascader } from './components/cascader/cascader';
export { Checkbox } from './components/checkbox/checkbox';
export { Tooltip, TooltipComponent } from './components/tooltip/tooltip';
export { Icon, IconSize, IconComponent } from './components/icon';
