import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class CookingIngredientsService {
  constructor(
    @Inject('NATS') private readonly natsService: ClientProxy
  ) { }

  async receiveAllIngredients(username: string) {
    const startTime = Date.now();
    return this.natsService
      .send(`get.ingredients.${username}`, {})
      .pipe(
        map(queueData =>
        ({
          queueTook: Date.now() - startTime,
          data: queueData.data,
        })
        )
      )
  }
}
