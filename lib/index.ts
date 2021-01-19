import { decode } from "./decode";
import Camera, { CameraOpt } from "./camera";

interface QrCodeResult {
  data: string;
  center: { x: number; y: number };
}

export interface QrcodeOpt extends CameraOpt {
  waitScan?: number;
  onScreenshot?: (imgData?: string) => any;
  onResult?: (result: QrCodeResult, close: Function) => any;
}

const VanillaQRCode = (
  ele: string | HTMLElement,
  { format = "any", waitScan = 300, onScreenshot, onResult, ...opt }: QrcodeOpt = {}
) => {
  const camera = Camera(ele, { size: 2, area: 1, square: true, ...opt });
  if (!camera) {
    return;
  }
  camera.format = format;
  let close = false;
  const screenshot = () => {
    if (close) {
      return;
    }

    const imgData = camera.screenshot();

    if (!imgData) {
      requestAnimationFrame(screenshot);
      return;
    }

    if (onScreenshot) {
      onScreenshot(imgData);
    }

    decode(camera.format as any, imgData).then((code: any) => {
      if (code && onResult) {
        onResult(code, () => {
          close = true;
          camera.remove();
        });
      }
      requestAnimationFrame(screenshot);
    });
  };
  setTimeout(screenshot, waitScan);
  return camera;
};

VanillaQRCode.RanderCamera = Camera;
VanillaQRCode.decode = decode;

export default VanillaQRCode;
