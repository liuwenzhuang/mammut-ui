import { RegularT } from 'regularts';

import { TagProps, TagState } from './tag.interface';
import template from './tag.html';
import styles from './tag.scss';

export class Tag extends RegularT<TagProps, TagState> {
    template = template;
    name = 'ui-tag';

    data: TagProps & TagState = {
        className: '',
        style: {},
        styles,
        onlyBgColor: false,
    };

    config() {
        if (this.data.bgColor && !this.data.color) {
            this.$update({
                onlyBgColor: true,
            });
        }
    }
}

export const TagComponent = RegularT.extend(Tag);
