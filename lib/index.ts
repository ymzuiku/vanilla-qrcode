import { ZXing } from "./decode";

const ua = window.navigator.userAgent.toLowerCase();
const isIos = /(?:iphone|ipad)/.test(ua);
const isAndroid = () => /(?:android)/.test(ua);
const isMobile = isIos || isAndroid;

interface QrCodeResult {
  text: string;
  format: number;
  numBits: number;
  resultPoints: number;
  timestamp: number;
}

let codeReader = new ZXing.BrowserMultiFormatReader();

let getConstrants = () => {
  return new Promise((res, rej) => {
    navigator.mediaDevices
      .enumerateDevices()
      .then(function (devices) {
        const device = devices.filter(function (device) {
          // const deviceLabel = device.label.split(",")[1];
          if (device.kind == "videoinput") {
            return device;
          }
        });

        let constraints;
        if (device.length > 1) {
          constraints = {
            video: {
              mandatory: {
                sourceId: device[device.length - 1].deviceId ? device[device.length - 1].deviceId : null,
              },
            },
            audio: false,
          } as any;

          if (isIos) {
            constraints.video.facingMode = "environment";
          }
          res(constraints);
        } else if (device.length) {
          constraints = {
            video: {
              mandatory: {
                sourceId: device[0].deviceId ? device[0].deviceId : null,
              },
            },
            audio: false,
          } as any;

          if (isIos) {
            constraints.video.facingMode = "environment";
          }

          if (!constraints.video.mandatory.sourceId && !isMobile) {
            res({ video: true });
          } else {
            res(constraints);
          }
        } else {
          res({ video: true });
        }
      })
      .catch(function (error) {
        console.error("Error occurred : ", error);
        rej(error);
      });
  });
};

const VanillaQRCode = (
  target: string | HTMLVideoElement,
  onResult?: (result: QrCodeResult, close: Function) => any
) => {
  getConstrants().then((opt) => {
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
    codeReader.decodeFromVideoDevice(opt, video, (result: any, err: any) => {
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
