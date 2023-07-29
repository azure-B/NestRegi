import { Test, TestingModule } from '@nestjs/testing';
import { VerifydbcontrollService } from './verifydbcontroll.service';

describe('VerifydbcontrollService', () => {
  let service: VerifydbcontrollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifydbcontrollService],
    }).compile();

    service = module.get<VerifydbcontrollService>(VerifydbcontrollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
