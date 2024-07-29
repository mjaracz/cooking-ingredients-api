import { Controller, Get, Param, Query } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';

@Controller('cooking-ingredients')
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }

  @Get('all-recipes')
  async getAllRecipes() {
    return this.cookingIngredientsService.receiveAllRecipes();
  }

  @Get('recipes')
  async getSearchRecipes(@Query('search') search: string) {
    return this.cookingIngredientsService.receiveSearchRecipes(search);
  }
}
