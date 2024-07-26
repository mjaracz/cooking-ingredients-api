import { NestFactory } from '@nestjs/core';
import { CookingIngredientsModule } from './cooking-ingredients.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CookingIngredientsModule, {
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    }
  });
  await app
    .listen()
    .then(() => logger.verbose('CookingIngredients microservice is listening'))
}
bootstrap();
