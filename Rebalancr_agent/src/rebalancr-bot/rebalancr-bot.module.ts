import { Module } from '@nestjs/common';
import { RebalancrBotService } from './rebalancr-bot.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../database/schemas/user.schema';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from 'src/database/database.module';
import { WalletModule } from 'src/wallet/wallet.module';
import { Session, SessionSchema } from 'src/database/schemas/session.schema';
import { RebalancrAgentModule } from 'src/rebalancr-agent/rebalancr-agent.module';
import { RebalancrBotController } from './rebalancr-bot.controller';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    RebalancrAgentModule,
    WalletModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  providers: [RebalancrBotService],
  controllers: [RebalancrBotController],
})
export class RebalancrModule {}
