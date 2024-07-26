import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsController } from '../cooking-ingredients.controller';

describe('CookingIngredientsController', () => {
  let controller: CookingIngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookingIngredientsController],
    }).compile();

    controller = module.get<CookingIngredientsController>(CookingIngredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
