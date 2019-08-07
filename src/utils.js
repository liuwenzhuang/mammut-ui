import _ from 'lodash';

/**
 * 处理样式对象
 * @param styles
 * @return {*}
 */
export function transformStyles(styles) {
    styles = Object.assign({}, styles);

    ['top', 'left', 'right', 'bottom'].forEach(key => {
        if (_.isString(styles[key])) return;

        if (isNaN(styles[key])) {
            delete styles[key];
        }

        if (_.isNumber(styles[key])) {
            styles[key] += 'px';
        }
    });

    return styles;
}
