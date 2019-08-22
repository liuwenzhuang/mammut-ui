# Overlay

> 创建统一浮层, 多用于处理空白处点击关闭的交互逻辑处理

## 示例

```html
<ui-cdk-overlay on-mousedown="{...}" on-scroll="{...}">overlay</ui-cdk-overlay>
```

## 传入参数

| 值            | 类型    | 描述                                  |
| ------------- | ------- | ------------------------------------- |
| disableScroll | boolean | 默认为 true. 设置后取消鼠标的滚动事件 |

## 事件

| 事件名称  | 描述                               |
| --------- | ---------------------------------- |
| mousedown | 鼠标在 overlay 上的 mousedown 事件 |
| scroll    | 鼠标在 overlay 上的 scroll 事件    |
