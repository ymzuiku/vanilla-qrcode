import "./quagga";
import "./qrcode";

const Quagga = (window as any).Quagga;
let qr: any;

function barcode(imgData: any) {
  return new Promise((res, rej) => {
    Quagga.decodeSingle(
      {
        src: imgData,
        numOfWorkers: 0,
        decoder: {
          readers: ["code_128_reader"],
        },
        inputStream: {
          size: 1024,
          area: {
            top: "5%",
            right: "5%",
            left: "5%",
            bottom: "5%",
          },
        },
      },
      function (result: any) {
        if (result && result.codeResult) {
          const v = result.codeResult;
          const line = result.line || [];
          const lx = (line[0] && line[0].x) || window.innerWidth / 2;
          const rx = (line[1] && line[1].x) || window.innerWidth / 2;
          const ly = (line[0] && line[0].y) || window.innerHeight / 2;
          const ry = (line[1] && line[1].y) || window.innerHeight / 2;
          const out = {
            format: "barcode",
            data: v.code,
            center: {
              x: (lx + rx) / 2,
              y: (ly + ry) / 2,
            },
          };
          res(out);
        } else {
          res(false);
        }
      }
    );
  });
}

function qrcode(imgData: any) {
  if (!qr) {
    qr = new (window as any).QrcodeDecoder();
  }
  return new Promise((res, rej) => {
    qr.decodeFromImage(imgData)
      .then((code: any) => {
        if (code && code.data) {
          const loc = code.location;
          const lx = (loc && loc.topLeftCorner && Number(loc.topLeftCorner.x)) || window.innerWidth / 2;
          const rx = (loc && loc.topLeftCorner && Number(loc.bottomRightCorner.x)) || window.innerWidth / 2;
          const ly = (loc && loc.topLeftCorner && Number(loc.topLeftCorner.y)) || window.innerHeight / 2;
          const ry = (loc && loc.topLeftCorner && Number(loc.bottomRightCorner.y)) || window.innerHeight / 2;

          const out = {
            format: "qrcode",
            data: code.data,
            center: {
              x: (lx + rx) / 2,
              y: (ly + ry) / 2,
            },
          };
          res(out);
        } else {
          res(false);
        }
      })
      .catch((err: any) => {
        rej(err);
      });
  });
}

export async function decode(format: "qrcode" | "barcode" | "any" | "none", imgData: any) {
  if (format === "any") {
    const res = await qrcode(imgData);
    if (res) {
      return res;
    }
    return barcode(imgData);
  } else if (format === "barcode") {
    return barcode(imgData);
  } else {
    return qrcode(imgData);
  }
}
