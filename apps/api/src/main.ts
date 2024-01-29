import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app
    .listen(PORT)
    .then(() => console.log(`\t- Server:\thttp://localhost:${PORT}`));
}
bootstrap();
