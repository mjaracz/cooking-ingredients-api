import { CookingIngredientsService } from '../cooking-ingredients.service';
import { ClientProxy } from '@nestjs/microservices';
import { mock } from '@utils/utils';
import { of } from 'rxjs';

describe('CookingIngredientsService', () => {
  let cookingIngredientsService: CookingIngredientsService;
  let simulationNatsClient: jest.Mocked<ClientProxy>;

  beforeEach(() => {
    simulationNatsClient = mock<ClientProxy>('send');
    cookingIngredientsService = new CookingIngredientsService(
      simulationNatsClient,
    );
    simulationNatsClient.send.mockReturnValueOnce(of('mocked-data'));
  });

  test('shuld be defined', () => {
    expect(cookingIngredientsService).toBeDefined();
  });

  test('receiveAllRecipes() method, should trigger send with get.recipes.all params', () => {
    cookingIngredientsService.receiveAllRecipes();
    expect(simulationNatsClient.send).toHaveBeenCalledWith(
      'get.recipes.all',
      {},
    );
  });

  test('receiveSearchRecipes() method, should tigger send with get.recipes.search params', () => {
    cookingIngredientsService.receiveSearchRecipes('mock-search-param');
    expect(simulationNatsClient.send).toHaveBeenCalledWith(
      'get.recipes.search',
      'mock-search-param',
    );
  });
});
