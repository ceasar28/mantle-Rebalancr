import { Module } from '@nestjs/common';
import { RebalancrAgentService } from './rebalancr-agent.service';
import { RebalancrAgentController } from './rebalancr-agent.controller';

@Module({
  exports: [RebalancrAgentService],
  providers: [RebalancrAgentService],
  controllers: [RebalancrAgentController],
})
export class RebalancrAgentModule {}
