import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { hostname } from 'os';

@Controller('health')
export class HealthController {

  @Get()
  health(@Res() res: Response): void {
    res.status(HttpStatus.OK).json({
      msg: 'ok',
      host: hostname(),
    });
  }
}
