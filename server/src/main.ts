import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  try {
    const app = await NestFactory.create(AppModule);

    // Global Prefix
    app.setGlobalPrefix('api/v1');

    // Global Validation
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));

    // CORS
    app.enableCors();

    // Swagger Documentation
    const config = new DocumentBuilder()
      .setTitle('Sustainability Highway API')
      .setDescription('The Blogging System and Admin Panel API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    logger.log(`Application is running on: ${await app.getUrl()}`);
    logger.log(`Swagger docs available at: ${await app.getUrl()}/docs`);
  } catch (error) {
    logger.error('Error starting server', error);
    process.exit(1);
  }
}
bootstrap();
