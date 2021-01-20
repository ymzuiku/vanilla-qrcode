import { ZXing } from "./decode";

interface QrCodeResult {
  text: string;
  format: number;
  numBits: number;
  resultPoints: number;
  timestamp: number;
}

const VanillaQRCode = (target: string | HTMLElement, onResult?: (result: QrCodeResult, close: Function) => any) => {
  const codeReader = new ZXing.BrowserMultiFormatReader();

  codeReader.listVideoInputDevices().then((videoInputDevices: any) => {
    let selectedDeviceId = videoInputDevices[videoInputDevices.length - 1].deviceId;

    let box: HTMLElement;
    if (typeof target === "string") {
      box = document.querySelector(target) as any;
    } else {
      box = target as HTMLElement;
    }
    if (!document.contains(box)) {
      return;
    }
    box.style.overflow = "hidden";
    box.style.display = "flex";
    box.style.flexDirection = "row";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";

    const video = document.createElement("video");
    video.width = box.clientWidth;
    video.height = box.clientHeight;
    video.controls = false;
    video.style.background = "#000";
    video.style.objectFit = "cover";
    video.muted = true;
    box.appendChild(video);

    codeReader.decodeFromVideoDevice(selectedDeviceId, video, (result: any, err: any) => {
      if (result && onResult) {
        onResult(result, () => {
          codeReader.reset();
        });
        console.log(result);
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        // console.error(err);
      }
    });
  });
  return codeReader;
};

export { ZXing };

export default VanillaQRCode;
