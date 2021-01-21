import { ZXing } from "./decode";

interface QrCodeResult {
  text: string;
  format: number;
  numBits: number;
  resultPoints: number;
  timestamp: number;
}

let codeReader = new ZXing.BrowserMultiFormatReader();

const getBackDevice = (videoInputDevices: any[]) => {
  if (!videoInputDevices || !videoInputDevices.length) {
    return null;
  }
  let out: any;
  videoInputDevices.forEach((item) => {
    if (item.label && /后置/.test(item.label)) {
      out = item;
    }
  });
  if (!out) {
    out = videoInputDevices[videoInputDevices.length - 1];
  }
  return out;
};

const VanillaQRCode = (
  target: string | HTMLVideoElement,
  onResult?: (result: QrCodeResult, close: Function) => any
) => {
  codeReader.listVideoInputDevices().then((videoInputDevices: any, ...args: any[]) => {
    const device = getBackDevice(videoInputDevices);
    if (!device) {
      return;
    }
    const selectedDeviceId = device.deviceId;

    let video: HTMLVideoElement;
    if (typeof target === "string") {
      video = document.querySelector(target) as any;
    } else {
      video = target as HTMLVideoElement;
    }
    if (!document.contains(video)) {
      return;
    }

    const iw = video.clientWidth;
    const ih = video.clientHeight;
    video.width = iw;
    video.height = ih;
    video.controls = false;
    video.style.background = "#000";
    video.style.objectFit = "cover";
    video.muted = true;
    video.autoplay = false;

    let lastText = "";
    codeReader.decodeFromVideoDevice(selectedDeviceId, video, (result: any, err: any) => {
      if (result) {
        console.log(result);
        if (onResult) {
          if (result.format == 11) {
            onResult(result, codeReader.reset);
          } else if (result.text === lastText) {
            onResult(result, codeReader.reset);
          }
          lastText = result.text;
        }
      } else if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err);
      }
    });
  });
  return codeReader;
};

export { ZXing };

export default VanillaQRCode;
