import { Controller, Get } from '@nestjs/common';
import { CookingIngredientsService } from './cooking-ingredients.service';

@Controller()
export class CookingIngredientsController {
  constructor(private readonly cookingIngredientsService: CookingIngredientsService) { }


}
