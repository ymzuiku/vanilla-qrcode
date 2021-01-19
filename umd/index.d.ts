import { CameraOpt } from "./camera";
interface QrCodeResult {
    data: string;
    center: {
        x: number;
        y: number;
    };
}
export interface QrcodeOpt extends CameraOpt {
    waitScan?: number;
    onScan?: (imgData?: string) => any;
    onResult?: (result: QrCodeResult, close: Function) => any;
}
declare const VanillaQRCode: {
    (ele: string | HTMLElement, { waitScan, onScan, onResult, ...opt }?: QrcodeOpt): {
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        remove: () => void;
        playPause: () => void;
        screenshot: () => string | undefined;
    } | undefined;
    Camera: (target: string | HTMLElement, { onError, direction, size, area, square }?: CameraOpt) => {
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        remove: () => void;
        playPause: () => void;
        screenshot: () => string | undefined;
    } | undefined;
};
export default VanillaQRCode;
