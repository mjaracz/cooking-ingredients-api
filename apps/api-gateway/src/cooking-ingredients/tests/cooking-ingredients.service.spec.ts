import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsService } from '../cooking-ingredients.service';

describe('CookingIngredientsService', () => {
  let service: CookingIngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CookingIngredientsService],
    }).compile();

    service = module.get<CookingIngredientsService>(CookingIngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
