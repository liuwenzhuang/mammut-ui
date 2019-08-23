# Input 输入组件

## 使用示例

```html
<ui-input />
```

## API

### Input

> 继承 [ui-cdk-input API](#inputcdk-输入组件)

| 参数       | 说明                           | 类型                                          | 默认值 | 实现状态 |
| ---------- | ------------------------------ | --------------------------------------------- | ------ | -------- |
| size       | 输入框大小，对应三种不同的长度 | small&verbar;normal&verbar;large              | normal | 是       |
| prefix     | 前置输入框图标                 | IconType                                      |        | 是       |
| suffix     | 后置输入框图标                 | IconType                                      |        | 是       |
| allowClear | 是否显示清除标签               | boolean                                       | false  | 是       |
| pressEnter | 按下回车时的回调               | (value: string, event: KeyboardEvent) => void |        | 是       |

### ui-input-group

> 用于组合其包裹的所有 input 类型组件

```html
<ui-input-group>
    <ui-input></ui-input>
    <ui-input></ui-input>
</ui-input-group>
```

| 参数    | 说明           | 类型    | 默认值 | 实现状态 |
| ------- | -------------- | ------- | ------ | -------- |
| compact | 是否用紧凑模式 | boolean | true   | 否       |

### ui-input-addon

> 用于在输入框前后添加标签
> 需要和 ui-input-group 组合使用
> 暂未实现多个前置、后置标签一同使用

```html
<ui-input-group>
    <ui-input-addon>
        <ui-select options="{options}"></ui-icon>
    </ui-input-addon>
    <ui-input></ui-input>
    <ui-input-addon>
        <ui-icon type="setting"></ui-icon>
    </ui-input-addon>
</ui-input-group>
```

| 参数      | 说明           | 类型   | 默认值 | 实现状态 |
| --------- | -------------- | ------ | ------ | -------- |
| placement | 标签添加的位置 | before | after  | before   | 是 |

### ui-input-textarea

> textarea 组件， 除 size 外，实现了 ui-input 的所有 API

```html
<ui-input-textarea defaultValue="textarea"></ui-input-textarea>
```

| 参数        | 说明                                          | 类型    | 默认值   | 实现状态 |
| ----------- | --------------------------------------------- | ------- | -------- | -------- |
| showCounter | 是否显示计数器（使用 String.length 属性计算） | boolean | false    | 是       |
| max         | 最大                                          | number  | Infinity | 是       |
