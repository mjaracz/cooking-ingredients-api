import { Controller, Get, Param } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';

@Controller('cooking-ingredients')
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }

  @Get('all-recipes')
  async getAllRecipes() {
    return this.cookingIngredientsService.receiveAllRecipes();
  }
}
