# vanilla-qrcode

绘制和获取摄像头画面，进行 h5 端的 QRCode 扫码

> 不支持 iOS 微信浏览器, iOS 请导流到 Safari 浏览器

Demo: [https://qrcode.writeflowy.com](https://qrcode.writeflowy.com)

## Install

npm:

```sh
$ yarn add vanilla-qrcode
```

unpkg:

```html
<script type="module" >
  import vanillaQrcode from 'https://cdn.skypack.dev/vanilla-qrcode';
  VanillaQRCode('#div')
</script>
```

## Use Camera

```ts
import VanillaQRCode from 'vanilla-qrcode';

// 传入一个 css 查找器，寻找一个合适大小的 Div 标签
VanillaQRCode('#div', {
  format: 'any' // any, barcode, qrcode, 默认为 any，any速度慢于指定类型
  size: 2, // 解析图像缩放
  area: 1, // 解析裁切剩余比例
  square: true, // 解析保持正方形
  onResult: (code, close) => {
    // code 结构： {data: string, center:{x:number: y: number}}
    alert(JSON.stringify(code));
    // 可选，关闭摄像头
    close();
  }
});

```
