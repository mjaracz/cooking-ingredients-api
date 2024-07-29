import { Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import * as fs from 'fs';

@Injectable()
export class CookingIngredientsService {
  private readonly cookingIngredientsIndex = 'cooking-ingredients';
  private docId = 0;
  constructor(
    private readonly elasticSearchService: ElasticsearchService,
    private readonly logger: Logger,
  ) {
    
    this.fillUpInitialData();
  }

  fillUpInitialData() {
    fs.readdir('data', (err: Error, files: string[]) => {
      if (err) {
        this.logger.error(err);
        return err;
      }

      files.forEach((file: string) => {
        fs.readFile(`data/${file}`, (err: Error, data: Buffer) => {
          if (err) return err;

          const parsedData = JSON.parse(data.toString());
          const isAlreadySaved = this.elasticSearchService.exists({ index: this.cookingIngredientsIndex, id: '1' });

          if (isAlreadySaved) this.saveCookingIngredients(parsedData);
        })
      })
    })

  }

  async saveCookingIngredients(doc: JSON) {
    return this.elasticSearchService.index({
      index: this.cookingIngredientsIndex,
      id: `${++this.docId}`,
      document: doc,
    })
  }

  async getAllRecipes() {
    return this.elasticSearchService
      .search({
        index: this.cookingIngredientsIndex,
        query: {
          match_all: {}
        }
      })
      .then(searchRes => searchRes.hits.hits);
  }

  async searchRecipes(searchValue: string) {
    return this.elasticSearchService.search({
      index: this.cookingIngredientsIndex,
      query: {
        query_string: {
          query: searchValue
        }
      }
    })
  }
}
