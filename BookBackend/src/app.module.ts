import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './typeorm/entities/Book';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'bookdb.cv7i1vrai572.ap-south-1.rds.amazonaws.com',
      host: 'localhost',
      // port: 3008,
      port: 3307,
      // username: 'admin',
      username: 'root',
      // password: 'Rahulmore121',
      password: 'root',
      database: 'bookdb',
      entities: [Book],
      synchronize: true,
      autoLoadEntities: true,
      
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}