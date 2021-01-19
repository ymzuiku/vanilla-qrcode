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
VanillaQRCode('#div', {
  // 以下是默认配置
  // format: any, barcode, qrcode, none; 默认为 any，any速度慢于指定类型
  format: 'any'
  // 默认 300ms， 摄像头开启会有黑屏时间，这个时候暂时不进行画面解析
  waitSreenshot: 300,
  size: 2, // 解析图像缩放
  area: 1, // 解析裁切剩余比例
  square: true, // 解析保持正方形
  onResult: (code, close) => {
    alert(JSON.stringify(code));
    // 可选，关闭摄像头
    close();
  }
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
    x:number;
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




