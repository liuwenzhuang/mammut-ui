import './assets/scss/index.scss';

// init RegularT
import RegularJs from 'regularjs';
import { RegularT } from 'regularts';

RegularT.setRegular(RegularJs);

// cdk component
export { Overlay } from './cdk/overlay/overlay';
export { Menu } from './cdk/menu/menu';
export { List } from './cdk/list/list';
export { Input } from './cdk/input/input';

// components
export { PopupMenu } from './components/popupMenu/popupMenu';
export { Cascader } from './components/cascader/cascader';
export { Tooltip, TooltipComponent } from './components/tooltip/tooltip';

