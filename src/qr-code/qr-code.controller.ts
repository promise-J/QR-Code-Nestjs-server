import { Controller, Get, Query, Res, HttpCode,HttpStatus } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { Response } from 'express';
import * as Q from 'qrcode'

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @HttpCode(200)
  @Get()
  async generateQrCode(@Query('text') text: string, @Res() res: Response) {
    try {
        const qrCode = await this.qrCodeService.generateQrCode(text);
        res.setHeader('Content-Type', 'image/png');
        console.log(await Q.toDataURL('promise'),'the qrcodeeee')
        // res.status(HttpStatus.OK).json(qrCode);
        res.status(HttpStatus.OK).json(await Q.toDataURL(text));
    } catch (error) {
        res.status(HttpStatus.BAD_GATEWAY).json('Something went wrong ');
    }
  }
}
