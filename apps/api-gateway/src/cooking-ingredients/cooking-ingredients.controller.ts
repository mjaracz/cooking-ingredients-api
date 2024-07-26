import { Controller, Get, Param } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';

@Controller('cooking-ingredients')
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }

  @Get(':username')
  async getCookingIngredients(@Param('username') username: string) {
    return this.cookingIngredientsService.receiveAllIngredients(username);
  }
}
