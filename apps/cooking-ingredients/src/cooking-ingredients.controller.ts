import { Controller } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }

  @MessagePattern('get.recipes.all')
  async getAllRecipes() {
    return this.cookingIngredientsService.getAllRecipes();
  }

  @MessagePattern('get.recipes.search')
  async getSearchRecipes(@Payload() searchValue: string) {
    return this.cookingIngredientsService.searchRecipes(searchValue);
  }
}
