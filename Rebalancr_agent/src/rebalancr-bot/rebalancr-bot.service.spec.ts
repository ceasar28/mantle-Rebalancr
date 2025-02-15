import { Test, TestingModule } from '@nestjs/testing';
import { RebalancrBotService } from './rebalancr-bot.service';

describe('ModeminBotService', () => {
  let service: RebalancrBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RebalancrBotService],
    }).compile();

    service = module.get<RebalancrBotService>(RebalancrBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
