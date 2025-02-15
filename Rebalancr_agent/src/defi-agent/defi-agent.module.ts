import { Module } from '@nestjs/common';
import { DefiAgentService } from './defi-agent.service';

@Module({
  providers: [DefiAgentService],
})
export class DefiAgentModule {}
