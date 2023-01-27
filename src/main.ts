import { NestFactory } from '@nestjs/core';
// import { Cors } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
// import { serveStatic } from '@nestjs/serve-static';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
  await app.listen(3000);
}
bootstrap();