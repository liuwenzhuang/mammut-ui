import marked from 'marked';
import Regular from 'regularjs';

import 'github-markdown-css/github-markdown.css';
import styles from './app.scss';

/**
 * 显示 markdown 的示例组件
 *
 * @property url - markdown 文件的相对路径 (相对于 components 目录)
 */
Regular.extend({
    name: 'MarkdownDoc',
    template: '<div class="markdown markdown-body" r-html="{html}"></div>',
    config(props) {
        this.data = Object.assign(
            {
                html: '',
                styles,
            },
            props
        );
        const url = (GHPAGES_PREFIX || '') + this.data.url;
        this.fetchFile(url);
    },
    fetchFile(url) {
        fetch(url)
            .then(res => res)
            .then(body => body.text())
            .then(text => {
                this.$update({
                    html: marked(text),
                });
            });
    },
});

export const App = Regular.extend({
    template: '<MarkdownDoc url="README.md"></MarkdownDoc>',
});
