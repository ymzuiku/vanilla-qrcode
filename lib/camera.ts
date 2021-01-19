const iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
const isMediaStreamAPISupported = navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices;

export function startCapture(video: HTMLVideoElement, constraints: any, onError: Function) {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      // video.playsInline = true;
      video.setAttribute("playsinline", "true");

      // 如果刚开始有控制器
      // if (video.controls) {
      //   setTimeout(() => {
      //     video.controls = false;
      //     requestAnimationFrame(() => {
      //       video.style.opacity = "1";
      //     });
      //   });
      // }
    })
    .catch(function (err) {
      console.log("Error occurred ", err);
      onError(err);
    });
}

export function startCamera(video: HTMLVideoElement, onError: Function) {
  if (isMediaStreamAPISupported) {
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

          if (iOS) {
            constraints.video.facingMode = "environment";
          }
          startCapture(video, constraints, onError);
        } else if (device.length) {
          constraints = {
            video: {
              mandatory: {
                sourceId: device[0].deviceId ? device[0].deviceId : null,
              },
            },
            audio: false,
          } as any;

          if (iOS) {
            constraints.video.facingMode = "environment";
          }

          if (!constraints.video.mandatory.sourceId && !iOS) {
            startCapture(video, { video: true }, onError);
          } else {
            startCapture(video, constraints, onError);
          }
        } else {
          startCapture(video, { video: true }, onError);
        }
      })
      .catch(function (error) {
        console.error("Error occurred : ", error);
      });
  }
}

export interface CameraOpt {
  format?: "any" | "qrcode" | "barcode" | "none";
  onError?: (error: string) => void;
  size?: number;
  area?: number;
  square?: number | boolean;
  direction?: "horizontal" | "vertical";
}

const getVideoWH = (video: HTMLVideoElement) => {
  return [video.videoWidth || video.width, video.videoHeight || video.height];
};

const VanillaCamera = (
  target: string | HTMLElement,
  { format, onError = () => {}, direction, size = 1, area = 1, square }: CameraOpt = {}
) => {
  let box: HTMLElement;
  if (typeof target === "string") {
    box = document.querySelector(target) as any;
  } else {
    box = target as HTMLElement;
  }
  if (!document.contains(box)) {
    onError("document.contains no found target");
    return;
  }
  const video = document.createElement("video");
  video.width = box.clientWidth;
  video.height = box.clientHeight;
  video.controls = false;
  video.style.background = "#000";
  video.muted = true;
  box.append(video);
  video.autoplay = true;
  startCamera(video, onError);

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth * size;
  canvas.height = window.innerHeight * size;

  const context = canvas.getContext("2d")!;

  let x = 0;
  let y = 0;
  let w = 100;
  let h = 100;
  let cw = 200;
  let ch = 200;

  video.addEventListener("canplay", function () {
    const [_w, _h] = getVideoWH(video);
    cw = _w * size;
    ch = _h * size;
    canvas.width = cw;
    canvas.height = ch;
    if (square) {
      let min = _w;
      if (_w > _h) {
        x = (_w - _h) / 2;
        min = _h;
      } else {
        y = (_h - _w) / 2;
      }
      w = min;
      h = min;
    } else {
      w = _w;
      h = _h;
    }
  });

  return {
    format,
    video,
    canvas,
    context,
    remove: () => {
      video.pause();
      video.remove();
      canvas.remove();
    },
    playPause: () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    // 绘制canvas画布、获取data
    screenshot: () => {
      if (video) {
        const a = (1 - area) * w;
        const b = (1 - area) * h;
        context.drawImage(video, a ? a / 2 : 0, b ? b / 2 : 0, w * area, h * area, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/png");
      }
    },
  };
};

(window as any).VanillaCamera = VanillaCamera;

export default VanillaCamera;
