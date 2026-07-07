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
    await app.listen(port, '0.0.0.0');

    // Nice startup message
    console.log('\n' + '='.repeat(50));
    console.log('🚀 SYSTEM READY');
    console.log('='.repeat(50));
    console.log(`📡 Backend:  http://localhost:${port}/api/v1`);
    console.log(`📖 Docs:     http://localhost:${port}/docs`);
    console.log(`🌐 Frontend: http://localhost:3000`);
    console.log(`🔐 Admin:    http://localhost:3000/admin/login`);
    console.log('='.repeat(50) + '\n');

  } catch (error) {
    logger.error('Error starting server', error);
    process.exit(1);
  }
}
bootstrap();
