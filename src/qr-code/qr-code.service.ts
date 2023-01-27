import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode'

@Injectable()
export class QrCodeService {
    async generateQrCode(text: string): Promise<Buffer> {
        return await qrcode.toBuffer(text)
        // return await qrcode.toBuffer(text);
      }
}
