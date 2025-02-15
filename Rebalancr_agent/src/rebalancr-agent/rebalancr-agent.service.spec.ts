import { Test, TestingModule } from '@nestjs/testing';
import { RebalancrAgentService } from './rebalancr-agent.service';

describe('RebalancrAgentService', () => {
  let service: RebalancrAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RebalancrAgentService],
    }).compile();

    service = module.get<RebalancrAgentService>(RebalancrAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
