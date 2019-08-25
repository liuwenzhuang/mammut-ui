import { RegularT } from 'regularts';
import template from './overlay.example.html';

export class OverlayExample extends RegularT{
    template = template;
}

export const OverlayExampleComponent = RegularT.extend(OverlayExample);
