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
      host: 'mysql_db',
      // port: 3008,
      port: 3306,
      // username: 'admin',
      username: 'root',
      // password: 'Rahulmore121',
      password: 'root',
      database: 'bookdb',
      entities: [Book],
      synchronize: true,
      autoLoadEntities: true,
      retryDelay: 1000, // Delay in milliseconds before retrying the connection
      // maxRetryAttempts: 10, // Maximum number of retry attempts
      
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
