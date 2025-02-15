import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RebalancrModule } from './rebalancr-bot/rebalancr-bot.module';
import { DefiAgentModule } from './defi-agent/defi-agent.module';
import { DatabaseModule } from './database/database.module';
import { WalletModule } from './wallet/wallet.module';
import { RebalancrAgentModule } from './rebalancr-agent/rebalancr-agent.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    RebalancrModule,
    DefiAgentModule,
    DatabaseModule,
    WalletModule,
    RebalancrAgentModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
