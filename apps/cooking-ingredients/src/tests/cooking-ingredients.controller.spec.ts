import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsController } from './cooking-ingredients.controller';
import { CookingIngredientsService } from './cooking-ingredients.service';

describe('CookingIngredientsController', () => {
  let cookingIngredientsController: CookingIngredientsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CookingIngredientsController],
      providers: [CookingIngredientsService],
    }).compile();

    cookingIngredientsController = app.get<CookingIngredientsController>(CookingIngredientsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cookingIngredientsController.getHello()).toBe('Hello World!');
    });
  });
});
