# vanilla-qrcode

@zxing/libiray已经足够好，当前版本改为仅仅是 @zxing/libiray 包裹

绘制和获取摄像头画面，进行 h5 端的 QRCode \ Barcode 扫码

> 不支持 iOS 微信浏览器, iOS 请导流到 Safari 浏览器

Demo: [https://qrcode.writeflowy.com](https://qrcode.writeflowy.com)

## Install

npm:

```sh
$ yarn add vanilla-qrcode
```

esm:

```html
<script type="module" >
  import vanillaQrcode from 'https://cdn.skypack.dev/vanilla-qrcode';
</script>
```

## Use Camera Scan

```ts
import VanillaQRCode from 'vanilla-qrcode';

// 传入一个 css 查找器，寻找一个合适大小的 video 标签
VanillaQRCode('#video', (code, close) => {
  alert(JSON.stringify(code));
  // 可选，关闭摄像头
  close();
});
```



