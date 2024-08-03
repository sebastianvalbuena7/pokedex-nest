import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    // Transformaciond de datos de los query params a tipo de dato
    transformOptions: {
      enableImplicitConversion: true
    }
    // forbidNonWhitelisted: true
  }));

  await app.listen(3000);
}
bootstrap();
