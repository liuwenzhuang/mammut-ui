# Cascader 级联组件

## 使用示例

模板
```html
<ui-cascader options="{options}" on-change="{this.handleChange($event)}"></ui-cascader>
```

配置项
```javascript
const options = [
    {
        label: '显示的内容',
        value: '实际选择的值',
        children: [
            {
                label: '下级选项',
                value: '下级选项的值',
                disabled: true // 设置选项禁用
            },
            {
                label: '下级选项2',
                value: '下级选项2的值',
                children: [] // 无限极嵌套
            }
        ]
    }
];
```

## API
| 参数 | 描述 | 默认值 |
| --- | --- | --- |
| disabled | 是否禁用组件 | false |
| displayRender | 显示内容计算函数, 传入参数为选择的选项 | 默认使用 ' / ' 连接选项 |
| options | 菜单选项 | - |
| size | 组件大小 | 与输入框大小选项相同 [Input size 文档](/examples/input#API) | 

## 方法

## TODO
- [ ] 功能 - 自动聚焦
- [ ] 功能 - 搜索
- [ ] 功能 - 动态加载
- [ ] 方法 - 聚焦方法
- [ ] 方法 - 失焦方法
