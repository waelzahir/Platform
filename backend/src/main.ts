import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.DATABASE_URL === undefined)
	{
		console.log("please provide the DATABASE_URL in The .env file")
		process.exit(-1)
	}
if (process.env.JWTSECRET === undefined)
	{
		console.log("please provide the JWTSECRET in The .env file")
		process.exit(-1)
	}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
	origin: [ "http://localhost"],
	methods: ["GET", "POST", "DELETE", "PATCH"],
	credentials: true,
});
app.use(cookieParser());
  app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
			transformOptions: { enableImplicitConversion: true },
		}),
	);
  await app.listen(3001);
}
bootstrap();
