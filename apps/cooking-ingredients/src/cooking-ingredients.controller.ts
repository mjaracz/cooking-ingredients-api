import { Controller, Get } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }

  @MessagePattern('get.recipes.all')
  async getAllRecipes() {
    return this.cookingIngredientsService.getAllRecipes();
  }
}
