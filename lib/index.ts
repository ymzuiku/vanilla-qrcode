import { decode } from "./decode";
import Camera, { CameraOpt } from "./camera";

interface QrCodeResult {
  data: string;
  center: { x: number; y: number };
}

export interface QrcodeOpt extends CameraOpt {
  // 扫码间隔，默认 20ms
  scanInterval?: number;
  waitSreenshot?: number;
  onScreenshot?: (imgData?: string) => any;
  onResult?: (result: QrCodeResult, close: Function) => any;
}

const VanillaQRCode = (
  ele: string | HTMLElement,
  { scanInterval, format = "any", waitSreenshot = 300, onScreenshot, onResult, ...opt }: QrcodeOpt = {}
) => {
  const camera = Camera(ele, opt);

  if (!camera) {
    return;
  }
  camera.format = format;
  const screenshot = () => {
    if (!camera || !camera.playing) {
      return;
    }

    const imgData = camera.screenshot();

    if (!imgData || camera.format === "none") {
      setTimeout(screenshot, scanInterval)
      return;
    }

    if (onScreenshot) {
      onScreenshot(imgData);
    }

    decode(camera.format as any, imgData).then((code: any) => {
      if (code && onResult) {
        onResult(code, camera.remove);
      }
      setTimeout(screenshot, scanInterval)
    });
  };

  setTimeout(screenshot, waitSreenshot)

  return camera;
};

VanillaQRCode.RanderCamera = Camera;
VanillaQRCode.decode = decode;

export default VanillaQRCode;
