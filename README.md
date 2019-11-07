# 说明

exp_build 是用于生成包含大写字母小写字母数字特殊字符和最小长度的正则字符串，主要用于自动生成密码正则。

## 使用

```bash
npm install exp_build
```

```javascript
import expBuild from "exp_build";

expBuild({
  upper: true,
  lower: true,
  number: true,
  symbol: true,
  length: 8
});
```

## 参数

| 参数   | 默认值 | 含义           |
| ------ | ------ | -------------- |
| upper  | false  | 包含大写字母   |
| lower  | false  | 包含小写字母   |
| number | false  | 包含数字       |
| symbol | false  | 包含特殊字符   |
| length | 0      | 字符串长度设置 |
