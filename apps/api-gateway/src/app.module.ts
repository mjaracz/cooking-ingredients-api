import { Module } from '@nestjs/common';
import { CookingIngredientsModule } from './cooking-ingredients/cooking-ingredients.module';

@Module({
  imports: [CookingIngredientsModule],
})
export class AppModule {}
