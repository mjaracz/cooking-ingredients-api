import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsController } from '../cooking-ingredients.controller';
import { CookingIngredientsService } from '../cooking-ingredients.service';

export class CookingIngredientsServiceMock {
  receiveAllRecipes() {
    return ['all recipes mock'];
  }

  receiveSearchRecipes() {
    return ['search recipes mock'];
  }
}

describe('CookingIngredientsController', () => {
  let controller: CookingIngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookingIngredientsController],
      providers: [
        {
          useClass: CookingIngredientsServiceMock,
          provide: CookingIngredientsService,
        },
      ],
    }).compile();

    controller = module.get<CookingIngredientsController>(
      CookingIngredientsController,
    );
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('getAllRecipes() method, should return all recipes array', () => {
    return controller.getAllRecipes().then((recipes) => {
      expect(recipes).toEqual(['all recipes mock']);
    });
  });

  test('getSearchRecipes() method, should return search recipes array', () => {
    return controller.getSearchRecipes('').then((recipes) => {
      expect(recipes).toEqual(['search recipes mock']);
    });
  });
});
