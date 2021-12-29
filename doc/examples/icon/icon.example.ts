import template from './icon.example.html';
import styles from './icon.example.scss';
import { RegularT } from 'regularts';

interface State {
    iconList: string[];
    styles: any;
}

class IconExample extends RegularT<{}, State> {
    template = template;
    data: {} & State = {
        iconList: [],
        styles,
    };

    config(): void {
        fetch('/src/components/icon/fonts/iconfont.js')
            .then(res => res)
            .then(body => body.text())
            .then(text => {
                this.analyzeIconList(text);
            });
    }

    analyzeIconList(text: string) {
        const iconList = [];
        const iconTypeReg = /id=['"]icon-(.*?)['"]/g;
        let matchResult;
        while ((matchResult = iconTypeReg.exec(text))) {
            iconList.push(matchResult[1]);
        }

        this.$update({
            iconList,
        });
    }

    onClick(type) {
        navigator.clipboard
            .writeText(type)
            .then(() => {
                console.log('文本已经成功复制到剪切板');
            })
            .catch(err => {
                console.error('无法复制此文本：', err);
            });
    }
}

export const IconExampleComponent = RegularT.extend(IconExample);
