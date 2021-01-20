# vanilla-qrcode

绘制和获取摄像头画面，进行 h5 端的 QRCode \ Barcode 扫码

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

## Use Camera Scan

```ts
import VanillaQRCode from 'vanilla-qrcode';

// 传入一个 css 查找器，寻找一个合适大小的 Div 标签
// 使用默认配置创建 camera
VanillaQRCode('#div')


// 自定义配置，以下是默认配置
VanillaQRCode('#div', (code, close) => {
  alert(JSON.stringify(code));
  // 可选，关闭摄像头
  close();
});
```

onResult 返回 code 结构

```ts
interface Code {
  format: 'qrcode'|'barcode'; 
  // 解析的结果字符串
  data: string;
  // 解析的坐标中心位置，方便绘制解析成功的 UI
  center: {
    x: number;
    y: number;
  }
}

```

## VanillaQRCode.decode

解析 barcode 或 qrcode 方法


```js
VanillaQRCode.decode('qrcode', imageData).then((code)=>{
  alert(JSON.stringify(code));
})
```




