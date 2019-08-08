import Regular from 'regularjs';
import styles from './exampl-preview.scss';

const ExampleWrap = Regular.extend({
    name: 'ExamplePreview',
    template: `
        <div class="{styles['doc-example']}">
            {#include this.$body}
        </div>
    `,
    data: {
        styles
    }
});

const ExampleMain = Regular.extend({
    name: 'Example.Main',
    template: `
        <div class="{styles['doc-example-preview']}">
            {#include this.$body}
        </div>
    `,
    data: {
        styles
    }
});

const ExampleDetails = Regular.extend({
    name: 'Example.details',
    template: `
        <div class="{styles['doc-example-document']}">
            {#include this.$body}
        </div>
    `,
    data: {
        styles
    }
});
