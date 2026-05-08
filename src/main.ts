import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Global Validation
  app.useGlobalPipes(new ValidationPipe());

  // ✅ Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('CI/CD Docker U1')
    .setDescription('Production Ready API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('api', app, document);
  }

  // ✅ PORT
  const port = process.env.PORT || 3000;

  await app.listen(port);

  // ✅ Logger
  const logger = new Logger('Bootstrap');

  logger.log(`🚀 Application is running successfully`);
  logger.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  logger.log(`📌 Server URL: http://localhost:${port}`);

  if (process.env.NODE_ENV !== 'production') {
    logger.log(`📚 Swagger URL: http://localhost:${port}/api`);
  }
}

bootstrap();