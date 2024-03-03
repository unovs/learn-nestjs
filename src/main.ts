import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;

  const config = new DocumentBuilder()
    .setTitle('learn nestjs')
    .setDescription('documentation swagger for project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port);
  console.log(
    `start server in \x1b[1m${process.env.NODE_ENV}\x1b[0m mode on port \x1b[1m${port}\x1b[0m`,
  );
}
bootstrap();
