import { Logger, Module } from '@nestjs/common';
import { CookingIngredientsController } from './cooking-ingredients.controller';
import { CookingIngredientsService } from './cooking-ingredients.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          node: configService.get('ELASTICSEARCH_NODE'),
          auth: {
            username: configService.get('ELASTICSEARCH_USERNAME'),
            password: configService.get('ELASTICSEARCH_PASSWORD'),
          }
        }
      },
      inject: [ConfigService],
    })
  ],
  controllers: [CookingIngredientsController],
  providers: [CookingIngredientsService, Logger],
})
export class CookingIngredientsModule { }
