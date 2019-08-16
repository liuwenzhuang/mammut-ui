import template from './icon.example.html';
import { RegularT } from 'regularts';

class IconExample extends RegularT {
    template = template;
}

export const IconExampleComponent = RegularT.extend(IconExample);
