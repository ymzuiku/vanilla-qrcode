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
    scanInterval?: number;
    waitSreenshot?: number;
    onScreenshot?: (imgData?: string) => any;
    onResult?: (result: QrCodeResult, close: Function) => any;
}
declare const VanillaQRCode: {
    (ele: string | HTMLElement, { scanInterval, format, waitSreenshot, onScreenshot, onResult, ...opt }?: QrcodeOpt): {
        playing: boolean;
        format: "any" | "qrcode" | "barcode" | "none" | undefined;
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        remove: () => void;
        playPause: () => void;
        screenshot: () => string | undefined;
    } | undefined;
    RanderCamera: (target: string | HTMLElement, { full, format, onError, direction, size }?: CameraOpt) => {
        playing: boolean;
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
