# InputCdk 输入组件

对 `input` 标签进行简单的封装

## 使用示例

```html
<ui-cdk-input />
```

## API

| 参数 | 说明 | 类型 | 默认值 | 实现状态 |da
| --- | --- | --- | --- | --- |
| defaultValue | 默认值，**由于双向绑定的关系会被修改** | string | "" | 是 |
| disabled | 是否禁用 | boolean | false | 是 |
| readonly | 是否只读 | boolean | false | 是 |
| placeholder | 提示用户输入框的作用 | string | "" | 是 |
| type | 输入框类型 | string | text | 是 |
| blur | 失焦事件 | ({$event: MouseEvent, value: string}) => void | 失焦时触发，返回当时输入框的值和触发变化的事件对象 | | 是 |
| focus | 聚焦事件 | ({$event: MouseEvent, value: string}) => void | 输入框聚焦时触发，返回当时输入框的值和触发变化的事件对象 | | 是 |
| input | 元素值发生改变时触发 | ({$event: MouseEvent, value: string}) => void | 输入框的值发生改变时触发，返回当时输入框的值和触发变化的事件对象 | | 是 | 
| change | 当用户提交对元素值的更改时触发 | ({$event: MouseEvent, value: string}) => void | 元素值的更改时触发，返回当时输入框的值和触发变化的事件对象 | | 是 | 
