import { Body, Controller, Post } from '@nestjs/common';
import { RebalancrAgentService } from './rebalancr-agent.service';

@Controller('rebalancr-agent')
export class RebalancrAgentController {
  constructor(private readonly rebalancrService: RebalancrAgentService) {}

  @Post('sentiment')
  sentiment(@Body() payload: { contract: string }) {
    return this.rebalancrService.analyzeToken(payload.contract);
  }
}
