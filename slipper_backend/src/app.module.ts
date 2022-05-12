import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TestAPIModule } from './apis/testAPI/test.module';

@Module({
  imports: [
    TestAPIModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    
    // // 배포시
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '10.41.208.3', // 
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'slipper_database', // 
    //   entities: [__dirname + '/apis/**/*.entity.*'],
    //   synchronize: true,
    //   logging: true,
    //   retryAttempts: 30,
    //   retryDelay: 5000,
    // }),

    // 로컬에서 작업 시
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydocker02',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
      retryAttempts: 30,
      retryDelay: 5000,
    }),
  ],

})
export class AppModule {}