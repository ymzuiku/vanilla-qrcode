# vanilla-qrcode

零依赖的绘制和获取摄像头画面，进行 h5 端的 QRCode 扫码

> 不支持 iOS 微信浏览器, iOS 请导流到 Safari 浏览器

Demo: [https://qrcode.writeflowy.com](https://qrcode.writeflowy.com)

## Install

npm:

```sh
$ yarn add vanilla-qrcode
```

unpkg:

```html
<script src="https://unpkg.com/vanilla-qrcode@1.0.0/umd/index.js"></script>
```

## Use Camera

```ts
import VanillaQRCode from 'vanilla-qrcode';

// 传入一个 css 查找器，寻找一个合适大小的 Div 标签
VanillaQRCode('#div', {
  onResult: (code, close) => {
    alert(JSON.stringify(code));
    // close();
  }
});

```
