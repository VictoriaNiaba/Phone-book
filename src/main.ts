import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Gestion de Contact')
    .setDescription('Application API de Gestion de Contact')
    .setVersion('1.0')
    .addTag('contacts')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
