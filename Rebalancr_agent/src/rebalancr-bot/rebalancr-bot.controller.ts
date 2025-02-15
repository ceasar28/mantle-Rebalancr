import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { RebalancrBotService } from './rebalancr-bot.service';
import type { Response } from 'express'; //

@Controller('rebalancr-bot')
export class RebalancrBotController {
  constructor(private readonly rebalancrService: RebalancrBotService) {}

  @Post('link')
  linkToBot(@Body() payload: { uniqueCode: string }) {
    return this.rebalancrService.linkBotToApp(payload.uniqueCode);
  }

  @Get('profile-photo/:id')
  // @Header('content-type', 'image/jpeg')
  async getMedia(
    @Param('id') id: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      console.log('query  :', id);
      const response = await this.rebalancrService.getProfilePhoto(id);
      if (response.buffer) {
        res.setHeader('content-type', 'image/jpeg');
        res.send(response.buffer);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
