import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CookingIngredientsService } from './cooking-ingredients.service';
import { CookingIngredientsController } from './cooking-ingredients.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS',
        transport: Transport.NATS,
        options: {
          url: 'amqp://localhost:4222',
        }
      }
    ])
  ],
  providers: [CookingIngredientsService],
  controllers: [CookingIngredientsController]
})
export class CookingIngredientsModule {}
