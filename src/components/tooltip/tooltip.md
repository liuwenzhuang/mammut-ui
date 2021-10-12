# Tooltip 文字提示

## 使用示例

```html
<ui-tooltip placement="top">文字提示</ui-tooltip>
```

## ui-tooltip

### API

| 参数             | 说明                                                                     | 类型                                       | 默认值 | 实现状态     |
| ---------------- | ------------------------------------------------------------------------ | ------------------------------------------ | ------ | ------------ |
| placement        | 文字提示位置                                                             | top&verbar;right&verbar;bottom&verbar;left | top    | 是           |
| preventDefault   | 是否取消掉组件的默认交互，一般与 visible 搭配使用来手动控制 tooltip 显示 | boolean                                    | false  | 是           |
| title            | 提示文案                                                                 | string&verbar;RegularTemplate              |        | 是           |
| tooltipClassName | 浮层自定义类名                                                           | string                                     | ""     | 是           |
| tooltipStyle     | 浮层                                                                     |
| trigger          | 浮层触发条件                                                             | hover&verbar;click                         | hover  | click 未实现 |
| visible          | 控制浮层显示状态                                                         | boolean                                    | false  | 是           |

## ui-tooltip-body

> tooltip 实际显示组件，调用时会直接显示一个 tooltip

### API

| 参数      | 说明                 | 类型                                       | 默认值 | 实现状态 |
| --------- | -------------------- | ------------------------------------------ | ------ | -------- |
| placement | 文字提示位置         | top&verbar;right&verbar;bottom&verbar;left | top    | 是       |
| title     | 提示文案             | string&verbar;RegularTemplate              |        | 是       |
| enter     | 鼠标进入浮层时的回调 | () => void                                 | -      | 是       |
| out       | 鼠标离开浮层时的回调 | () => void                                 | -      | 是       |

### 方法

| 名称                         | 说明                                     |
| ---------------------------- | ---------------------------------------- |
| \$show(position: ClientRect) | 显示 tooltip， position 是目标元素的位置 |
| \$hide()                     | 隐藏 tooltip                             |
