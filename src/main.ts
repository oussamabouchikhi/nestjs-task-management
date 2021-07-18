import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT);

  logger.log(`Application running at http://localhost:${PORT}`);
}
bootstrap();
