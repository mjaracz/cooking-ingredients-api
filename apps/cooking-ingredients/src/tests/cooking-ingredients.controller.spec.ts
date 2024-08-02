import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsController } from '../cooking-ingredients.controller';
import { CookingIngredientsService } from '../cooking-ingredients.service';

export class CookingIngredientsServiceMock {
  async getAllRecipes() {
    return ['mock list of recipes'];
  }
} 

describe('CookingIngredientsController', () => {
  let cookingIngredientsController: CookingIngredientsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CookingIngredientsController],
      providers: [
        {
          useClass: CookingIngredientsServiceMock,
          provide: CookingIngredientsService,
        }
      ],
    }).compile();

    cookingIngredientsController = app.get<CookingIngredientsController>(CookingIngredientsController);
  });

  describe('getAllRecipes()', () => {
    it('should return array of recipes', () => {
      return cookingIngredientsController.getAllRecipes().then(recipes => {
        expect(recipes).toEqual(['mock list of recipes']);
      })
    });
  });
});
