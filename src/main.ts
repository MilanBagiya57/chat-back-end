/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('Test API description')
    .setVersion('1.0')
    .addTag('Test')
    .build();

  app.useStaticAssets(resolve('./src/static'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3000);
}
bootstrap();
