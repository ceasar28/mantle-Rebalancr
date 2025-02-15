import { Test, TestingModule } from '@nestjs/testing';
import { RebalancrBotController } from './rebalancr-bot.controller';

describe('ModemindBotController', () => {
  let controller: RebalancrBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RebalancrBotController],
    }).compile();

    controller = module.get<RebalancrBotController>(RebalancrBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
