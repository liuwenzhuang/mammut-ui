import template from './tag.example.html';
import styles from './tag.example.scss';
import { RegularT } from 'regularts';

class TagExampleComponent extends RegularT {
    template = template;
    data = {
        styles,
    };
}

export const TagExample = RegularT.extend(TagExampleComponent);
