import { decode } from "./decode";
import { CameraOpt } from "./camera";
interface QrCodeResult {
    data: string;
    center: {
        x: number;
        y: number;
    };
}
export interface QrcodeOpt extends CameraOpt {
    waitSreenshot?: number;
    onScreenshot?: (imgData?: string) => any;
    onResult?: (result: QrCodeResult, close: Function) => any;
}
declare const VanillaQRCode: {
    (ele: string | HTMLElement, { format, waitSreenshot, onScreenshot, onResult, ...opt }?: QrcodeOpt): {
        format: "any" | "qrcode" | "barcode" | "none" | undefined;
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        remove: () => void;
        playPause: () => void;
        screenshot: () => string | undefined;
    } | undefined;
    RanderCamera: (target: string | HTMLElement, { format, onError, direction, size, area, square }?: CameraOpt) => {
        format: "any" | "qrcode" | "barcode" | "none" | undefined;
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        remove: () => void;
        playPause: () => void;
        screenshot: () => string | undefined;
    } | undefined;
    decode: typeof decode;
};
export default VanillaQRCode;
