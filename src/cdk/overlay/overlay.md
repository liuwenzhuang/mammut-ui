# Overlay

> 创建统一浮层, 多用于处理空白处点击关闭的交互逻辑处理

## 示例

```html
<ui-cdk-overlay on-mousedown="{...}" on-scroll="{...}">overlay</ui-cdk-overlay>
```

## ui-cdk-overlay

### API

| 参数           | 说明                               | 类型                       | 默认值 | 实现状态 |
| -------------- | ---------------------------------- | -------------------------- | ------ | -------- |
| disabledScroll | 设置后取消鼠标的滚动事件           | boolean                    | true   | 是       |
| mousedown      | 鼠标在 overlay 上的 mousedown 事件 | (event:MouseEvent) => void | -      | 是       |
| scroll         | 鼠标在 overlay 上的 scroll 事件    | (event) => void            | -      | 是       |


### 方法

| 名称 | 说明 | 类型 |
| $getWrapElement | 获取 overlay 组件的外层包裹元素 | $getWrapElement() => HTMLDivElement |
