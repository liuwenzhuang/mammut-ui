# InputCdk 输入组件

对 `input` 标签进行简单的封装

## 使用示例

```html
<ui-cdk-input />
```

## API

| 参数 | 说明 | 类型 | 默认值 | 实现状态 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认值 | string | "" | 是 |
| value | 输入框的值 | string | "" | 是 |
| disabled | 是否禁用 | boolean | false | 是 |
| readonly | 是否只读 | boolean | false | 是 |
| placeholder | 提示用户输入框的作用 | string | "" | 是 |
| type | 输入框类型 | string | text | 是 |
| blur | 输入框失焦时的回调 | ({event: MouseEvent, value: string}) => void | | 是 |
| focus | 输入框聚焦时的回调 | ({event: MouseEvent, value: string}) => void | | 是 |
| keydown | 键盘按下时的回调 | (event: InputEvent) => void | | 是 |
| keyup | 键盘释放时的回调 | (event: InputEvent) => void | | 是 |
| change | 输入内容发生变化时的回调 | ({event: InputEvent, value: string}) => void | | 是 | 
