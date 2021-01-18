export declare function startCapture(video: HTMLVideoElement, constraints: any, onError: Function): void;
export declare function startCamera(video: HTMLVideoElement, onError: Function): void;
export interface CameraOpt {
    onError?: (error: string) => void;
    size?: number;
    area?: number;
    square?: number | boolean;
    direction?: "horizontal" | "vertical";
}
declare const VanillaCamera: (target: string | HTMLElement, { onError, direction, size, area, square }?: CameraOpt) => {
    video: HTMLVideoElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    remove: () => void;
    playPause: () => void;
    screenshot: () => string | undefined;
} | undefined;
export default VanillaCamera;
