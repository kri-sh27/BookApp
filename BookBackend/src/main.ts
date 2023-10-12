import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AWS, { config } from 'aws-sdk';
// import {cors} from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, ); //{ cors: true }
  app.enableCors();

  //app.use(cors());

//   app.enableCors({
//     origin: '*',
//     methods: 'GET, PUT, POST, DELETE',
//     allowedHeaders: 'Content-Type, Authorization',
// });
config.update({

  accessKeyId: 'AKIAVL5LKHEDSSBFVB4Z',

  secretAccessKey:"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",

  region: "ap-south-1",

});



// const credentials = new AWS.SharedIniFileCredentials({ profile:  });

// config.credentials = credentials;

await app.listen(80);
}
bootstrap();
