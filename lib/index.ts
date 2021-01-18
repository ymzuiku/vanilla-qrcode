import VanillaCamera, { CameraOpt } from "./camera";


interface QrCodeResult {
  data: string;
  center: { x: number, y: number };
}

interface QrcodeOpt extends CameraOpt {
  waitScan?:number;
  onScan?: (imgData?: string) => any;
  onResult?: (result: QrCodeResult, close: Function) => any;
}


const VanillaQRCode = (ele: string | HTMLElement, { waitScan=300, onScan, onResult, ...opt }: QrcodeOpt = {}) => {
  const qr = new (window as any).QrcodeDecoder();
  const camera = VanillaCamera(ele, { size: 1.5, area: 0.6, square: true, ...opt });
  if (!camera) {
    return;
  }
  let close = false;
  const screenshot = () => {
    if (close) {
      return;
    }

    const imgData = camera.screenshot();
    if (!imgData) {
      requestAnimationFrame(screenshot)
      return;
    }

    if (onScan) {
      onScan(imgData)
    }

    qr.decodeFromImage(imgData).then((code: any) => {
      if (code && onResult) {
        const loc = code.location;
        const lx = loc && loc.topLeftCorner && Number(loc.topLeftCorner.x) || window.innerWidth / 2;
        const rx = loc && loc.topLeftCorner && Number(loc.bottomRightCorner.x) || window.innerWidth / 2;
        const ly = loc && loc.topLeftCorner && Number(loc.topLeftCorner.y) || window.innerHeight / 2;
        const ry = loc && loc.topLeftCorner && Number(loc.bottomRightCorner.y) || window.innerHeight / 2;

        const out = {
          data: code.data,
          center: {
            x: (lx + rx) / 2,
            y: (ly + ry) / 2,
          }
        }
        onResult(out, () => {
          close = true;
          camera.remove();
        });
      }

      requestAnimationFrame(screenshot)
    })
  }
  setTimeout(screenshot, waitScan);
  return camera;
};

export default VanillaQRCode;
