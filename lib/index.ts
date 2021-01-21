import { ZXing } from "./decode";

const ua = window.navigator.userAgent.toLowerCase();

const isIos = /(?:iphone|ipad)/.test(ua);
const isLocal = /(127.0.0.1|localhost)/.test(window.location.origin);
const isIosMobile = isIos && !isLocal;

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

          if (!constraints.video.mandatory.sourceId && !isIos) {
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
  if (!navigator || !navigator.mediaDevices) {
    console.error("Can not find navigator.mediaDevices, use https");
    return {};
  }
  const startReader = (opt: any) => {
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
  };

  if (isIosMobile) {
    getConstrants().then(startReader);
  } else {
    codeReader.listVideoInputDevices().then((videoInputDevices: any, ...args: any[]) => {
      const device = getBackDevice(videoInputDevices);
      if (!device) {
        return;
      }
      startReader(device.deviceId);
    });
  }

  return codeReader;
};

export { ZXing };

export default VanillaQRCode;
