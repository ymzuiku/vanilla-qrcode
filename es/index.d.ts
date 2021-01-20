import { ZXing } from "./decode";
interface QrCodeResult {
    text: string;
    format: number;
    numBits: number;
    resultPoints: number;
    timestamp: number;
}
declare const VanillaQRCode: (target: string | HTMLElement, onResult?: ((result: QrCodeResult, close: Function) => any) | undefined) => any;
export { ZXing };
export default VanillaQRCode;
