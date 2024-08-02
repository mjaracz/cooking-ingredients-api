import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Test, TestingModule } from '@nestjs/testing';
import { CookingIngredientsService } from '../cooking-ingredients.service';
import { Logger } from '@nestjs/common';

export class ElasticsearchServiceMock {
  exists() { }
  async search() {
    return { hits: { hits: ['mock, recipes example data'] } }
  }
}

describe('CookingIngredientsService', () => {
  let cookingIngredientsService: CookingIngredientsService;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ElasticsearchService,
          useClass: ElasticsearchServiceMock,
        },
        Logger,
        CookingIngredientsService,
      ]
    }).compile();

    cookingIngredientsService = testingModule.get<CookingIngredientsService>(CookingIngredientsService);
  });

  describe('getAllRecipes()', () => {
    test('should return all recipes getting from ElasticSearch service', () => {
      return cookingIngredientsService.getAllRecipes().then(recipes => {
        expect(recipes).toEqual(['mock, recipes example data'])
      })
    })
  })
});
