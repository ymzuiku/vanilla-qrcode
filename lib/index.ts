import { ZXing } from "./decode";

interface QrCodeResult {
  text: string;
  format: number;
  numBits: number;
  resultPoints: number;
  timestamp: number;
}

// function drawPoint(draw: HTMLElement, iw: number, ih: number, points: { x: number; y: number }[]) {
//   if (!points || !points.length) {
//     return;
//   }
//   let str = "";
//   points.forEach((pos, i) => {
//     if (i === 0) {
//       str += `M${pos.x/2},${pos.y/2} `;
//     } else {
//       str += `L${pos.x},${pos.y} `;
//     }
//   });
//   const svg = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${iw/2} ${ih}" fill="none" style="stroke:#68f;stroke-width:2" version="1.1">
//     <path d="${str}" />
//   </svg>`;

//   draw.innerHTML = svg;
// }

const VanillaQRCode = (
  target: string | HTMLElement,
  onResult?: (result: QrCodeResult, close: Function) => any,
  // { hiddenLine }: { hiddenLine?: boolean } = {}
) => {
  const codeReader = new ZXing.BrowserMultiFormatReader();

  codeReader.listVideoInputDevices().then((videoInputDevices: any) => {
    let selectedDeviceId: any;
    if (videoInputDevices.length > 0) {
      selectedDeviceId = videoInputDevices[videoInputDevices.length - 1].deviceId;
    }

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
    box.style.position = "retavite";

    const video = document.createElement("video");
    const iw = box.clientWidth;
    const ih = box.clientHeight;
    video.width = iw;
    video.height = ih;
    video.controls = false;
    video.style.background = "#000";
    video.style.objectFit = "cover";
    video.muted = true;
    video.autoplay = false;
    box.appendChild(video);

    // let draw: HTMLElement;
    // if (!hiddenLine) {
    //   draw = document.createElement("div");
    //   draw.style.position = "absolute";
    //   draw.style.zIndex = "9000";
    //   draw.style.width = iw + "px";
    //   draw.style.height = ih + "px";
    //   draw.style.pointerEvents = "none";
    //   box.appendChild(draw);
    // }

    let lastText = "";
    codeReader.decodeFromVideoDevice(selectedDeviceId, video, (result: any, err: any) => {
      if (result) {
        console.log(result);
        // if (draw) {
        //   drawPoint(draw, iw, ih, result.resultPoints);
        // }
        if (onResult) {
          if (result.format == 11) {
            onResult(result, () => {
              codeReader.reset();
            });
          } else if (result.text === lastText) {
            onResult(result, () => {
              codeReader.reset();
            });
          }
          lastText = result.text;
        }
      } else if (err && !(err instanceof ZXing.NotFoundException)) {
        // console.error(err);
      }
    });
  });
  return codeReader;
};

export { ZXing };

export default VanillaQRCode;
