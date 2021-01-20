const iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
const isMediaStreamAPISupported = navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices;

export function startCapture(video: HTMLVideoElement, constraints: any, onError: Function) {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      // video.playsInline = true;
      video.setAttribute("playsinline", "true");
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
  objectFit?: "cover" | "fill" | "contain";
  format?: "any" | "qrcode" | "barcode" | "none";
  onError?: (error: string) => void;
  size?: number;
  direction?: "horizontal" | "vertical";
}

const getVideoWH = (video: HTMLVideoElement) => {
  return [video.videoWidth || video.width, video.videoHeight || video.height];
};

const VanillaCamera = (
  target: string | HTMLElement,
  { objectFit = "cover", format, onError = () => {}, direction, size = 1 }: CameraOpt = {}
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
  box.style.overflow = "hidden";
  box.style.display = "flex";
  box.style.flexDirection = "row";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  const video = document.createElement("video");
  video.style.objectFit = objectFit;
  video.setAttribute("object-fit", objectFit);
  video.width = box.clientWidth;
  video.height = box.clientHeight;
  video.controls = false;
  video.style.background = "#000";
  video.muted = true;
  box.appendChild(video);
  video.autoplay = true;
  startCamera(video, onError);

  const canvas = document.createElement("canvas");
  canvas.width = video.width * size;
  canvas.height = video.height * size;

  const context = canvas.getContext("2d")!;

  // video.addEventListener("canplay", function () {
  //   if (full) {
  //     const [_w, _h] = getVideoWH(video);
  //     const fix = _h / _w;
  //     const old = bh / bw;
  //     const scale =  (old - fix) * 0.7 +1 ;
  //     if (box.clientHeight > _h) {
  //       video.style.transformOrigin = "0.5, 0,5";
  //       if (scale > 1) {
  //         video.style.transform = `scale(${scale})`;
  //       }
  //     }
  //   }
  // });

  const out = {
    playing: true,
    format,
    video,
    canvas,
    context,
    remove: () => {
      video.pause();
      out.playing = false;
      box.innerText = "";
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
      if (out.playing) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/png");
      }
    },
  };

  return out;
};

(window as any).VanillaCamera = VanillaCamera;

export default VanillaCamera;
